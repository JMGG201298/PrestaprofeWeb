<?php

namespace App\Services;

use App\Models\City;
use App\Models\Institution;
use App\Models\Municipality;
use App\Repositories\InstitutionRepository;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class InstitutionService {

    protected $institutionRepository;

    public function __construct(InstitutionRepository $institutionRepository)
    {
        $this->institutionRepository = $institutionRepository;
    }

    public function getAll()
    {
        return $this->institutionRepository->getAll();
    }

    public function getOne($institution)
    {
        return $this->institutionRepository->getOne($institution);
    }

    public function create($data)
    {
        $rules =[
            'name' => 'required|string|max:255',
        ];

        $validator= Validator::make($data,$rules);

        if($validator->fails()){

            return response($validator->errors(),422);

        }else{
            return $this->institutionRepository->create($data);
        }
    }

    public function update($data, $institution)
    {
        $rules =[
            'name' => 'string|max:255',
        ];

        $validator= Validator::make($data,$rules);

        if($validator->fails()){
            return response($validator->errors(),422);
        }
        else{
            if ($this->institutionRepository->update($data, $institution)) {
                return $institution;
            }
            else{

            }
        }
    }

    public function delete($institution)
    {
        return $this->institutionRepository->delete($institution);
    }

    public function importInstitutions($file)
    {
        //dd($file);
        $inputFileName = '/Users/mac/Downloads/todasinstituciones.xlsx';
        $reader = \PhpOffice\PhpSpreadsheet\IOFactory::createReader('Xlsx');
        $reader->setReadDataOnly(true);
        $content = $reader->load($inputFileName);

        $worksheets = $content->getAllSheets();


        foreach ($worksheets as $worksheet) {
            $iterator = $worksheet->toArray(NULL, FALSE, FALSE, FALSE);
                for ($j=1; $j < sizeof($iterator); $j++) {
                    if(empty($iterator[$j][0])){
                      break;
                    }


                    $munCode = $iterator[$j][11];
                    $municipality = Municipality::whereRaw('CAST(code AS UNSIGNED) = ?',[$munCode])->first();
                    if($municipality != null){
                        $cityName = $iterator[$j][14];
                        $cityId = DB::select("SELECT id from cities where name like _utf8'%". $cityName ."%' AND municipality_id = ".$municipality->id ." LIMIT 1");
                    }


                    $inst = Institution::firstOrCreate(
                      ['clave' => $iterator[$j][0]] ,
                      [
                        'name' => $iterator[$j][3],
                        'address' => $iterator[$j][15].' '.$iterator[$j][16],
                        'email' => $iterator[$j][26],
                        'phone' =>$iterator[$j][23],
                        'clave' => $iterator[$j][0],
                        'city_id' => empty($cityId) ? null : $cityId[0]->id,
                      ]
                    );
                }
        }

    }
}

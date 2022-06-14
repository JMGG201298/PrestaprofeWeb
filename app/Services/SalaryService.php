<?php

namespace App\Services;

use App\Repositories\SalaryRepository;
use Illuminate\Support\Facades\Validator;

class SalaryService {

    protected $salaryRepository;

    public function __construct(SalaryRepository $salaryRepository)
    {
        $this->salaryRepository = $salaryRepository;
    }

    public function getAll()
    {
        return $this->salaryRepository->getAll();
    }

    public function getOne($salary)
    {
        return $this->salaryRepository->getOne($salary);
    }

    public function create($data)
    {
        $rules =[
            'range' => 'required|string|max:255'
        ];

        $validator= Validator::make($data, $rules);

        if($validator->fails()){

            return response($validator->errors(),422);

        }else{

            return $this->salaryRepository->create($data);

        }
    }

    public function update($data, $salary)
    {
        $rules =[
            'range' => 'string|max:255'
        ];

        $validator= Validator::make($data,$rules);

        if($validator->fails()){

            return response($validator->errors(),422);

        }else{
            if ($this->salaryRepository->update($data, $salary)) {
                return $salary;
            }
            else{

            }
        }
    }

    public function delete($salary)
    {
        return $this->salaryRepository->delete($salary);
    }
}

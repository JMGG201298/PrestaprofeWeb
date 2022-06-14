<?php

namespace App\Http\Controllers\Api;

use App\Mail\UserSaved;
use Illuminate\Http\Request;
use App\Models\InfoClient;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class InfoClientController extends Controller
{
    public function index(){
        return InfoClient::all();
    }

    public function show(InfoClient $info_client){
        return $info_client;
    }

    public function store(Request $request){
        $data=$request->all();
        $rules=[
            'name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required',
            'address' => 'required',
            'phone' => 'numeric:10',
            'birth_date' => 'required',
            'gender' => 'required',
            'civil_status' => 'required',
            'curp' => 'required',
            'rfc' => 'required',
            'ine' => 'required',
            'ine_back' => 'required',
            'pay_stub' => 'required',
            'selfie' => 'required',
            'proof_address' => 'required',
            'first_reference_person_name' => 'required',
            'first_reference_person_phone' => 'required',
            'second_reference_person_name' => 'required',
            'second_reference_person_phone' => 'required'
        ];

        $validator = Validator::make($data,$rules);
        if($validator->fails()){
            return response($validator->errors(), 422);
        }else{
            $contra = $this->make_password();
            $data['password'] = $contra;
            $data['password'] = bcrypt($data['password']);
            $user = User::create($data);
            return $user;
        }
    }
    /**
     * Genera una contraseña aleatoria
     * @return String
     */
    public function make_password()
    {
        return substr(str_shuffle('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 0, 8);
    }

    //For mobile app call only
    public function createClient(Request $request)
    {
        $data = $request->all();

        $rules = [
            'name' => 'required|string',
            'last_name' => 'required|string',
            'birth_date' => 'required|date_format:Y-m-d',
            'gender' => 'required|in:Hombre,Mujer',
            'civil_status' => 'required|in:Soltero/a,Casado/a,Divorciado/a,Separacion en proceso judicial,Viudo/a,Concubinato',
            'curp' => 'required|string|size:18',
            'address' => 'required|string',
            //'institution_id',
            //'type',
        ];

        $validator = Validator::make($data, $rules);
        if($validator->fails()){
            return response($validator->errors(), 422);
        }else{

            $client = User::create($data);
            return $client;
        }
    }
}
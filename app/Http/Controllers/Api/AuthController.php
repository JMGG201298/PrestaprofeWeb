<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:191',
            'last_name' => 'required|string|max:191',
            'birth_date' => 'required|date',
            'gender' => 'required|in:Hombre,Mujer',
            'civil_status' => 'required|in:Soltero/a,Casado/a,Divorciado/a,Separacion en proceso judicial,Viudo/a,Concubinato',
            'curp' => 'string|size:13',
            'address' => 'required|max:255',
            //'institution_id' => 'required|exists:institutions,id',
            'type' => 'required|string',
            'salary_id' => 'required|exists:salaries,id',
            'phone' => 'required|string|max:15',
            'email' => 'required|string|email|max:255|unique:users'
        ]);
        if ($validator->fails())
        {
            return response($validator->errors(), 422);
        }
        $request['password']=Hash::make($request['password']);
        $request['remember_token'] = Str::random(10);
        $user = User::create($request->toArray());
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = ['token' => $token];
        return response($response, 200);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails())
        {
            return response($validator->errors(), 422);
        }
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->plainTextToken;
                $response = ['token' => $token,
                            ];
                return response($response, 200);
            } else {
                $response = ["password" => "Contraseña incorrecta"];
                return response($response, 422);
            }
        } else {
            $response = ["email" =>'El email proporcionado no está asociado a un usuario registrado'];
            return response($response, 422);
        }
    }

    public function mobilelogin(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
            'device_name' => 'required',
        ]);

        if ($validator->fails())
        {
            return response($validator->errors(), 422);
        }

        $user = User::where('email', $request->email)->first();
        

        if ($user) {
            if($user->is_phone_verified == 0 || $user->is_phone_verified == false){
                $response = ["message" => "Número de teléfono no verificado."];
                return response($response, 422);
            }
            //else if($user->is_admon_verified == 0 || $user->is_admon_verified == false){
             //   $response = ["message" => "Usuario no aprobado."];
             //   return response($response, 422);
            //}
            //else if($user->active == 0 || $user->active == false){
            //    $response = ["message" => "Usuario no activo."];
            //    return response($response, 422);
            //}
            else if (Hash::check($request->password, $user->password)) {
                if($user->tokens->count()>0){
                    return $user->tokens->map(function($token){
                        return ['name'=>$token->name,
                                'last_used_at'=>$token->last_used_at];
                    });
                    //PersonalAccessToken::where('tokenable_id',$user->id)->delete();
                }
                $token = $user->createToken($request->device_name)->plainTextToken;
                $response = ['user' => $user,'token' => $token];
                return response($response, 200);
            } else {
                $response = ["password" => "Contraseña incorrecta"];
                return response($response, 422);
            }
        } else {
            $response = ["email" =>'El email proporcionado no está asociado a un usuario registrado'];
            return response($response, 422);
        }

    }


    /**
    * Cierra todas las sesiónes del usuario
    * @access public
    * @param string Correo del usuario
    * @return ResponseFactory
    */
    public function closeAllSessions($email){
        $user = User::where('email',$email)->first();
        $user->tokens()->delete();
        return response(['message'=>'Las sesiones han sido cerradas exitosamente'],200);
    }

    // method for user logout and delete token
    public function logout(Request $request)
    {
        //Hacer que solo borre el token actual o el que le manda el usuario
        auth()->user()->tokens()->delete();

        $response = [

            'message' => "Has cerrado tu sesión existosamente"
        ];
        return response($response, 200);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Models\Municipality;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Models\State;

class MunicipalityController extends Controller
{
    public function index()
    {
       return Municipality::all();
    }

    public function municipalitiesByState(State $state)
    {
        return Municipality::where('state_id', $state->id)->get();
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $rules = [
            'code' => 'required|string',
            'name' => 'required|string',
            'state_id' => 'required|exists:states,id'
        ];
        $validator = Validator::make($data,$rules);
        if($validator->fails()){
            return response($validator->errors(), 422);
        }else{
            $municipality = Municipality::create($data);
            return $municipality;
        }

    }

    public function update(Request $request, Municipality $municipality)
    {
        $data = $request->all();
        $rules = [
            'code' => 'string',
            'name' => 'string',
            'state_id' => 'exists:states,id'
        ];
        $validator = Validator::make($data,$rules);
        if($validator->fails()){
            return response($validator->errors(), 422);
        }else{
            $municipality->update($data);
            return $municipality;
        }
    }

    public function destroy(Municipality $municipality)
    {
        $municipality->delete();
        return $municipality;
    }
}

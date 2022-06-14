<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\City;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Models\Municipality;

class CityController extends Controller
{
    public function index()
    {
       return City::all();
    }

    public function citiesByMunicipality(Municipality $municipality)
    {
        return City::where('municipality_id', $municipality->id)->get();
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $rules = [
            'zip_code' => 'required|numeric',
            'name' => 'required|string',
            'municipality_id' => 'required|exists:municipalities,id'
        ];
        $validator = Validator::make($data,$rules);
        if($validator->fails()){
            return response($validator->errors(), 422);
        }else{
            $city = City::create($data);
            return $city;
        }

    }

    public function update(Request $request, City $city)
    {
        $data = $request->all();
        $rules = [
            'code' => 'string',
            'name' => 'string',
            'municipality_id' => 'exists:municipalities,id'
        ];
        $validator = Validator::make($data,$rules);
        if($validator->fails()){
            return response($validator->errors(), 422);
        }else{
            $city->update($data);
            return $city;
        }
    }

    public function destroy(City $city)
    {
        $city->delete();
        return $city;
    }
}

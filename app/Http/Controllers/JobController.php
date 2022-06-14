<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Models\Occupation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller
{
    public function index()
    {
        return Occupation::all();
    }


    public function store(Request $request)
    {
       $data = $request->all();
       $rules = [
           'name' => 'required|string',
           'description' => 'nullable|string',
       ];

       $validator = Validator::make($data, $rules);

       if($validator->fails()){
           return response($validator->errors(),422);
       }else{
           $job = Occupation::create($data);
           return $job;
       }
    }

    public function update(Request $request, Occupation $job)
    {
        $data = $request->all();
       $rules = [
           'name' => 'string',
           'description' => 'string',
       ];

       $validator = Validator::make($data, $rules);

       if($validator->fails()){
           return response($validator->errors(),422);
       }else{
           $job->update($data);
           return $job;
       }
    }

    public function destroy(Occupation $job)
    {
        $job->delete();
        return $job;
    }
}

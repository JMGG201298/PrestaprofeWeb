<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Loan;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\LoanResource;
use App\Models\User;

class LoanController extends Controller
{
    public function index()
    {
        return LoanResource::collection(Loan::all());
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $rules  = [
            //'payment_reference' => 'required|string',
            'amount' => 'required|numeric|min:1',
            'payment_schema' => 'required|in:biweekly,monthly',
            //'application_date' => 'required|date',
            //'payment_proof' => 'nullable',
            //'expired_date',
            //'accepted_date',
            //'frozen_date',
            'card_id' => 'required|exists:cards,id',
            'user_id' => 'required|exists:users,id',
        ];

        $validator = Validator::make($data, $rules);
        if($validator->fails()){
            return response($validator->errors(), 422);
        }else{
            $currenDate = Carbon::now();
            if($data['payment_schema'] == 'monthly'){
                $data['expired_date'] = $currenDate->addDays(30);
            }else if($data['payment_schema'] == 'biweekly'){
                $data['expired_date'] = $currenDate->addDays(15);
            }

            $currenDate = Carbon::now();
            $data['application_date'] = $currenDate;
            $data['accepted_date'] = $currenDate;
            $loan = loan::create($data);
            return new LoanResource($loan);
        }
    }

    public function update(Request $request, Loan $loan)
    {
        $data = $request->all();
        $rules  = [
            'payment_reference' => 'required|string',
            //'payment_proof' => 'nullable',
            //'expired_date',
            //'frozen_date',
        ];

        $validator = Validator::make($data, $rules);
        if($validator->fails()){
            return response($validator->errors(), 422);
        }else{

            $loan->update($data);
            return new LoanResource($loan);
        }
    }

    public function show(Loan $loan)
    {
       return $loan;
    }

    public function myLoans(User $user){
        return LoanResource::collection($user->loans);
    }
}

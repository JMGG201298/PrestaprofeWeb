<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Loan;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Barryvdh\DomPDF\Facade as PDF;

class LoanController extends Controller
{
    public function index(){
        $loans= DB::table('loans as lo')->select('us.name','us.last_name','lo.base_amount','lo.application_date', 'lo.payment_scheme','me.days as term', 'ls.name as state', 'ls.id as idState', 'lo.id')
        ->join('users as us','lo.user_id','=','us.id')
        ->join('Methods as me','me.id','=','lo.method_id')
        ->join('loan_loan_state as lls','lls.loan_id','=','lo.id')
        ->join('loan_states as ls', 'ls.id','=','lls.loan_state_id')
        ->where('lls.active','=',1)->where('ls.id','<','4')->get();

        return $loans;
    }

    public function store(Request $request){
        $rules = [
            'base_amount' => 'required|numeric',
            //'card_id' => 'integer',
            'user_id' => 'required|integer',
            'application_date' => 'required|integer',
            'payment_scheme' => 'required',
            'category_id' => 'required|integer|exists:categories,id',
            'method_id' => 'required|integer|exists:methods,id',
        ];

        $data=$request->all();

        $validator = Validator::make($data,$rules);

        if($validator->fails()){
            return response($validator->errors(),422);
        }else{
            $loan = Loan::create([
                'base_amount' => $data['base_amount'],
                //'card_id' => $data['card_id'],
                'application_date' => $data['application_date'],
                'payment_scheme' => $data['payment_scheme'],
                'category_id' => $data['category_id'],
                'method_id' => $data['method_id'],
                'user_id' => $data['user_id']
            ]);

            return $loan->states;
            //return Loan::find(3)->states;
        }
    }

    public function loanPdf(Loan $loan){
        $pdf = PDF::loadView('pdfs.ReportLoan', compact('loan'));
        return $pdf->stream();
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model{
    protected $timestamp = false;

    protected $fillable=[
        'amount',
        'payment_proof',
        'total',
        'subtr',
        'expired_date',
        'payday',
        'loans',
        'loans_id'
    ];

    public function period(){
        return $this->belongsTo(Period::class);
    }
}
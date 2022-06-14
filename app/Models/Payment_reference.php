<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment_reference extends Model
{
    protected $timestamps = false;

    protected $fillable = [
        'reference_code',
        'user_id'
    ];

    public function users(){
        return $this->hasMany(User::class);
    }
    public function loans(){
        return $this->belongsTo(Loan::class);
    }
}

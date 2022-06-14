<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Period extends Model
{
    protected $fillable=[
        
    ];

    public function extensions(){
        return $this->hasMany(Extension::class);
    }

    public function loan(){
        return $this->belongsTo(Loan::class);
    }
}

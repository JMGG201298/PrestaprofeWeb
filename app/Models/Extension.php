<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Extension extends Model
{
    protected $fillable=[
        'start_date',
        'end_date',
        'status',
        'period_id'
    ];

    public function period(){
        return $this->belongsTo(Period::class);
    }
}

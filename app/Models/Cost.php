<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cost extends Model
{
    protected $fillable=[
        'min_mount',
        'max_mount',
        'interest',
        'copc',
        'val_reference',
        'iva',
        'late_interest'
    ];

}

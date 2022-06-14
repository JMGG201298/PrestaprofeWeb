<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Method extends Model
{
    protected $fillable=[
        'number_payments',
        'days'
    ];

    public function Categories(){
        return $this->belongsToMany(Category::class);
    }
}

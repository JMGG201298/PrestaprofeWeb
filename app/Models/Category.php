<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable=[
        'min_amount',
        'max_amount',
        'copc',
        'number_references'
    ];

    public function methods(){
        return $this->belongsToMany(Method::class);
    }
}

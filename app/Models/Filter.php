<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filter extends Model
{
    protected $fillable=[
        'level',
        'max_amount'
    ];

    public function info_clients(){
        return $this->hasMany(Info_client::class);
    }
}

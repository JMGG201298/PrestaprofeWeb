<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salary extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'range'
    ];

    public function info_clients()
    {
        return $this->hasMany(Info_client::class);
    }

}

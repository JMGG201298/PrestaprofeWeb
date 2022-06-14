<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'zip_code',
        'municipality_id'
    ];

    public function municipality()
    {
        return $this->belongsTo(Municipality::class);
    }
    public function info_clients(){
        return $this->hasMany(Info_client::class);
    }
    public function institutions(){
        return $this->hasMany(Institutions::class);
    }

}

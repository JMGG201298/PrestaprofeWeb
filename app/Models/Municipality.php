<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Municipality extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'code',
        'state_id',
    ];

    public function cities()
    {
        return $this->hasMany(City::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InfoClient extends Model
{
    public $timestamps=false;

    protected $fillable = [
        'birth_date',
        'gender',
        'civil_status',
        'curp',
        'rfc',
        'ine',
        'ine_back',
        'pay_stub',
        'selfie',
        'proof_address',
        'birth_certificate',
        'first_reference_person_name',
        'first_reference_person_phone',
        'second_reference_person_name',
        'second_reference_person_phone',
        'user_id',
        'salary_id',
        'city_id',
        'occupations_id',
        'filter_id'
    ];

    public function occupation(){
        return $this->belongsTo(Occupation::class);
    }

    public function salary(){
        return $this->belongsTo(Salary::class);
    }

    public function city(){
        return $this->belongsTo(City::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function level(){
        return $this->belongsTo(Level::class);
    }

    public function filter(){
        return $this->belongsTo(Filter::class);
    }
}


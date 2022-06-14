<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{

    use HasFactory;
    protected $timestamp = false;

    protected $fillable = [
        'card_number',
        'expired_date',
        'active',
        'user_id',
        'clabe',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function loans(){
        return $this->hasMany(Loan::class);
    }

}

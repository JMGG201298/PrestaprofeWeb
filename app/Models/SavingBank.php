<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SavingBank extends Model
{
    use HasFactory;
    protected $fillable = [
        'amount',
        'description',
        'user_id'
    ];

    public function user()
    {
      return $this->hasOne(SavingBank::class);
    }

}

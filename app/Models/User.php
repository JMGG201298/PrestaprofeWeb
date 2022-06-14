<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'last_name',
        'address',
        'type',
        'phone',
        'email',
        'password',
        'active',
        'is_phone_verified',
        'is_admon_verified',
        'token'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

   public function info_client(){
       return $this->hasOne(Info_client::class);
   }

   public function saving_bank(){
       return $this->hasMany(SavingBank::class);
   }

   public function payment_reference(){
       return $this->hasMany(Payment_reference::class);
   }

   public function card(){
       return $this->hasMany(Card::class);
   }

}


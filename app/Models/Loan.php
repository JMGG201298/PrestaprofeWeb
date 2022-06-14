<?php

namespace App\Models;

use App\Models\Payment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PaymentExtension;

class Loan extends Model
{
    protected $fillable = [
        'base_amount',
        'total_amount',
        'card_id',
        'user_id',
        'payment_references_id',
        'payment_type_id',
        'payment_scheme',
        'category_id',
        'method_id',
        'note'
    ];

    public function card(){
      return $this->belongsTo(Card::class);
    }

    public function payment_reference(){
      return $this->belongsTo(Payment_reference::class);
    }

    public function payment_types(){
      return $this->belongsTo(Payment_reference::class);
    }

    public function periods(){
      return $this->hasMany(Period::class);
    }


    public function user(){
      return $this->belongsTo(User::class);
    }

    public function states(){
      return $this->belongsToMany(LoanState::class);
    }
    public function method(){
      return $this->belongsTo(Method::class);
    }
    public function category(){
      return $this->belongsTo(Category::class);
    }
}

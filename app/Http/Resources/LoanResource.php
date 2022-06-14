<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LoanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'payment_reference'=>$this->payment_reference,
            'amount'=>floatval($this->amount),
            'payment_schema'=>$this->payment_schema,
            'application_date'=>$this->application_date,
            'accepted_date'=>$this->accepted_date,
            'frozen_date'=>$this->frozen_date,
            'card_id'=>$this->card_id,
            'user_id'=>$this->user_id,
        ];
    }
}

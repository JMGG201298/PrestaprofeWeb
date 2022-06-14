<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Card;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
class CardController extends Controller
{
    public function index()
    {
        return Card::all();
    }
    public function store(Request $request)
    {
        $data = $request->all();

        $rules = [
            'is_active' => 'nullable|in:0,1',
            'card_number' => 'nullable|string',
            'expired_date' => 'nullable|date-format:y/m',
            'clabe' => 'nullable|numeric',
            'user_id' => 'required|exists:users,id',
        ];

        $validator = Validator::make($data, $rules);
        if($validator->fails()){
            return response($validator->errors(), 422);
        }else{
            $existingCards = Card::where('user_id', $data['user_id'])->count();
            if($existingCards == 0){
                $data['active'] = 1;
            }else if(isset($data['is_active']) && $data['is_active'] == 1){
                $this->inactiveCards($data['user_id']);
                $data['active'] = 1;
            }
            $card = Card::create($data);
            return $card;
        }
    }

    public function myCards(User $user)
    {
       return $user->cards;
    }

    public function activeCard(User $user)
    {
       return Card::where('user_id', $user->id)->where('active', 1)->first();
    }

    public function destroy(Card $card)
    {
        if($card->active){
            return response('No se puede elimnar tarejta activa', 401);
        }
        $card->delete();
        return $card;
    }

    public function inactiveCards($userId)
    {
        Card::where('active',1)->where('user_id', $userId)->update(['active' => 0]);
    }
}

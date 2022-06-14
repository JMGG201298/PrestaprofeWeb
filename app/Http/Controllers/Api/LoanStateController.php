<?php

namespace App\Http\Controllers\Api;

use App\Models\LoanState;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LoanStateController extends Controller
{
    public function index(){
        return LoanState::all();
    }
}

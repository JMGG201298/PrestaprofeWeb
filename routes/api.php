<?php

use App\Events\NotificationNextPay;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PaymentController;
use App\Models\User;
use App\Http\Controllers\Api\StateController;
use App\Http\Controllers\Api\UserController;
use App\Jobs\jobExample;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\Prueba;
use App\Services\NotificationService;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use App\Models\Loan;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//API route for register new user
Route::post('register', [AuthController::class, 'register']);
//API route for login user
Route::post('login', [AuthController::class, 'login']);

Route::post('mobilelogin', [AuthController::class, 'mobilelogin']);

Route::resource('institutions', 'Api\InstitutionController');
Route::resource('salaries', 'Api\SalaryController');
Route::resource('states', 'Api\StateController');
Route::resource('municipalities', 'Api\MunicipalityController');
Route::get('state_municipalities/{state}','Api\MunicipalityController@municipalitiesByState');
Route::resource('cities', 'Api\CityController');
Route::get('municipality_cities/{municipality}','Api\CityController@citiesByMunicipality');
Route::post('import_institutions','Api\InstitutionController@importInstitutions');

Route::resource('jobs', 'JobController');
Route::get('get-verification-code/{phone}','Api\UserController@getVerificationCode');
Route::post('create-client','Api\UserController@createClient');
Route::get('change-verification-phone-status/{user}','Api\UserController@changeVerificationPhoneStatus');

//CARDS
Route::resource('cards', 'CardController');
Route::get('my-cards/{user}','CardController@myCards');

//LOANS
Route::resource('loans', 'LoanController');

Route::get('my-loans/{user}','LoanController@myLoans');


Route::post('importaEstados', [StateController::class, 'importStates']);
//Protecting Routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('user', 'Api\UserController@user');

    Route::resource('users', 'Api\UserController');
    
    //Obtiene informacion de todos los clientes
    Route::get('getClients','Api\UserController@getClients');
    //Obteine información de un cliente
    Route::get('getClient/{user}','Api\UserController@getClient');
    
    Route::resource('roles', 'Api\RoleController');
    
    
    Route::post('checkClients','Api\UserController@checkClients');
    
    //Users
    Route::get('changeStatusUser/{user}','Api\UserController@changeStatusUser');
    
    // API route for logout user
    Route::post('logout', [AuthController::class, 'logout']);
    
});

//loans
Route::resource('loans','Api\LoanController');

//PDFS
Route::get('loan-pdf/{loan}', 'Api\LoanController@loanPdf');

//loanStates
Route::resource('loan-states', 'Api\LoanStateController');

//Route::resource('info-clients','Api\Info_clientController');


Route::get('recovery-user/{email?}','Api\UserController@recovery_user');

Route::get('recovery/{user}', [UserController::class, 'recovery']);

/*Route::get('correo', function(){
    Mail::to("anarqueabrn@gmail.com")->send(new Prueba());
});*/

Route::get('notificacion',function(){
    $notificationService=new NotificationService();
    return $notificationService->send_notification_FCM(null,null,null,null,null);
});

Route::get('has-token-user/{user}/{token}',[UserController::class, 'hasTokenUser']);
Route::get('close-all-sessions/{email}','Api\AuthController@closeAllSessions');

Route::get('cards',function(){
    return User::find(1)->first();
});

Route::get('trigger/{data}', function ($data) {
    event(new App\Events\prueba($data));
});
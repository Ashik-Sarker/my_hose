<?php

use App\Http\Controllers\CaretakerDetailsController;
use App\Http\Controllers\DriverDetailsController;
use App\Http\Controllers\EmergencyContactController;
use App\Http\Controllers\FamilyMembersDetailsController;
use App\Http\Controllers\FlatDetailsController;
use App\Http\Controllers\HomeServantDetailsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandLordController;
use App\Models\CaretakerDetails;
use App\Models\DriverDetails;
use App\Models\EmergencyContact;
use App\Models\FamilyMembersDetails;
use App\Models\FlatDetails;
use App\Models\HomeServantDetails;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('land-lord', LandLordController::class);

Route::resource('emergency-contact', EmergencyContactController::class);

Route::resource('family-member-details', FamilyMembersDetailsController::class);

Route::resource('home-servant-details', HomeServantDetailsController::class);

Route::resource('driver-details', DriverDetailsController::class);

Route::resource('caretaker-details', CaretakerDetailsController::class);

Route::resource('flat-details', FlatDetailsController::class);

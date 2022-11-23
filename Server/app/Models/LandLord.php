<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LandLord extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'land_lord_picture',
        'land_lord_permanent_address',
        'owner_name',
        'father_name',
        'mother_name',
        'date_of_birth',
        'marital_status',
        'occupation',
        'religion',
        'education',
        'mobile',
        'email',
        'nid',
        'passport',
        'land_lord_form_submit_date',
        'land_lord_signature'
    ];
}

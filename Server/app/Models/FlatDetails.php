<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FlatDetails extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'land_lord_master_id',
        'flat_name',
        'flat_renter_name',
        'referral_code'
    ];
}

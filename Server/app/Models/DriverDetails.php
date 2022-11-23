<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DriverDetails extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'driver_name',
        'nid',
        'mobile',
        'area'
    ];
}

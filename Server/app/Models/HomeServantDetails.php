<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HomeServantDetails extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'land_lord_master_id',
        'servant_name',
        'nid',
        'mobile',
        'area'
    ];
}

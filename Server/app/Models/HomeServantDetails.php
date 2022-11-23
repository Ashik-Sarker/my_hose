<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HomeServantDetails extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'servant_name',
        'nid',
        'mobile',
        'area'
    ];
}

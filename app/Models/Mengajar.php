<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mengajar extends Model
{
  use HasFactory;

  protected $table = 'mengajars';
  protected $guarded = ['id'];
}

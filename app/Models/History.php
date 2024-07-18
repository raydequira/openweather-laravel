<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;

    // this is optional but you can define your table here
    protected $table = 'history';

    protected $fillable = [
        'city',
        'latitude',
        'longitude',
        'created_by',
        'response',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}

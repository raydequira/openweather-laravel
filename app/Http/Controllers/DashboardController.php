<?php

namespace App\Http\Controllers;

use App\Traits\Countriesnow;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class DashboardController extends Controller
{
    use Countriesnow;

    public function index(Request $request)
    {
        $cities = Session::get('cities');

        if (!$cities) {
            $cities = $this->getCountriesNowData();        
            Session::put('cities', $cities);
        }
        
        return Inertia::render(
            'Dashboard/Index',
            [
                'cities' => $cities
            ],
        );
    }
}

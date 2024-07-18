<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

trait Countriesnow {
    public function getCountriesNowData () 
    {
        $countriesData = Http::get(env("COUNTRIESNOW_URL_API"))->json();

        $cities = [];

        foreach ($countriesData['data'] as $country) {
            foreach ($country['cities'] as $city) {                
                if (!in_array($city, $cities)) {
                    $cities[] = $city;
                }
            }
        }

        return $cities;
    }
}
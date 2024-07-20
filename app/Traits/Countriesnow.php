<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

trait Countriesnow {
    public function getCountriesNowData () 
    {
        /*
         * for actual system store the data in db
         * or json/xml file to avoid calling 3rd party API
        */
        $countriesData = Http::get(env("COUNTRIESNOW_URL_API"))->json();

        $cities = [];
        
        if ($countriesData && $countriesData['data']) {
            foreach ($countriesData['data'] as $country) {
                foreach ($country['cities'] as $city) {                
                    if (!in_array($city, $cities)) {
                        $cities[] = $city;
                    }
                }
            }
        }
        

        return $cities;
    }
}
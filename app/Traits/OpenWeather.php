<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

trait OpenWeather {
    public function getOpenWeatherData ($city) 
    {
        return Http::get(env("WEATHER_API_URL_DATA"), [
            'q'     => $city,
            'appid' => $this->apiId(),
        ]);
    }

    public function getOpenWeatherDaily ($lat, $lon) 
    {
        return Http::get(env("WEATHER_API_URL_DAILY"), [
            'lat'   => $lat,
            'lon'   => $lon,
            'cnt'   => 7,
            'appid' => $this->apiId(),
        ]);
    }

    private function apiId () 
    {
        return env("WEATHER_API_KEY");
    }
}
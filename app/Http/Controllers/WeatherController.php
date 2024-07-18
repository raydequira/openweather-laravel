<?php

namespace App\Http\Controllers;

use App\Traits\OpenWeather;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WeatherController extends Controller
{
    use OpenWeather;

    public function city(Request $request) 
    {   
        $request->validate([
            'city' => 'required|string|max:255',
        ]);

        return $this->getWeather([
            "city" => $request->city
        ]);
    }

    public function coordinates(Request $request) 
    {
        // validate here can be regex, keep it simple for now
        $request->validate([
            'latitude'  => ['required','regex:/^[-]?(([0-8]?[0-9])\.(\d+))|(90(\.0+)?)$/'],
            'longitude' => ['required','regex:/^[-]?((((1[0-7][0-9])|([0-9]?[0-9]))\.(\d+))|180(\.0+)?)$/'],
        ]);

        return $this->getWeather([
            "lat"   => $request->latitude,
            "lon"   => $request->longitude,
        ]);
    }

    private function getWeather($filter) 
    {
        if (isset($filter['city']) && $filter['city']) {
            $response   = $this->getOpenWeatherData($filter['city']);            
            $user       = auth()->user();  
            if ($response->successful()) {
                // insert db
                /*History::create([
                    'city'     => $filter['city'],
                    'created_by' => $user->id,
                ]);*/

                return $response->json();
            } else {
                return response()
                    ->json([
                        'status'    => 'error',
                        'message'   => 'No data found for this city'
                    ]);
            }
            
        } else if (
            (isset($filter['lat']) && $filter['lat']) &&
            isset($filter['lon']) && $filter['lon']
        ){
            $response   = $this->getOpenWeatherDaily($filter['lat'], $filter['lon']);            
            $user       = auth()->user();  
            if ($response->successful()) {
                // insert db
                /*History::create([
                    'city'     => $filter['city'],
                    'created_by' => $user->id,
                ]);*/

                return $response->json();
            } else {
                return response()
                    ->json([
                        'status'    => 'error',
                        'message'   => 'No data found for these coordinates'
                    ]);
            }
        } else {
            return response()
                ->json([
                    'status'    => 'error',
                    'message'   => 'invalid parameter'
                ]);
        }

        //http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid={API key}
        //https://api.openweathermap.org/data/2.5/weather?q=rock&appid=
    }
}

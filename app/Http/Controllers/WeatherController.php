<?php

namespace App\Http\Controllers;

use App\Models\History;
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

    public function histories(Request $requet)
    {
        $user = auth()->user();
        $histories = History::whereBelongsTo($user)->orderBy('id', 'desc')->get();

        return response()->json([
            'histories' => $histories
        ]);
    }

    private function getWeather($filter) 
    {
        if (isset($filter['city']) && $filter['city']) {
            $response   = $this->getOpenWeatherData($filter['city']);            
            $user       = auth()->user();  
            if ($response->successful()) {
                // insert recent search to db
                History::create([
                    'city'          => $filter['city'],
                    'created_by'    => $user->id,
                    'response'      => $response->body(),
                ]);

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
                History::create([
                    'longitude'     => $filter['lat'],
                    'latitude'      => $filter['lon'],
                    'created_by'    => $user->id,
                    'response'      => $response->body(),
                ]);

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
    }
}

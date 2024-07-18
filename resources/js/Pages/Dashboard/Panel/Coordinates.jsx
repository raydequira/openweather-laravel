import React, { useState } from "react";
import CoordinatesTable from '@/Pages/Dashboard/Panel/CoordinatesTable';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from '@inertiajs/react';

export default function Coordinates({
    historyData
}) {
    
    // You can use useForm to set your data aside from useState
    const { data, setData } = useForm({
        'longitude' : '',
        'latitude'  : '',
    });
    // Show history data if given
    const [weatherData, setWeatherData] = useState(historyData);

    const handleSearch = (e) => {
        var regLatitude = new RegExp("^-?([0-8]?[0-9]|90)(\.[0-9]{1,10})$");
        var regLongitude = new RegExp("^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})$");

		if (!regLatitude.exec(data.latitude) || !regLongitude.exec(data.longitude)) {
            toast.error("Invalid coordinates");
            return;
        }

        toast.loading("Please wait...");
        
        axios.get(route('weather.coordinates'), {
            params: data            
        })
        .then(function (response) {
            toast.dismiss();
            if (response.data.status == 'error') {
                toast.error(response.data.message);                
            } else {
                setWeatherData(response.data);
                toast.success("Please see result");
            }            
        }).catch(function (error) {
            toast.dismiss();				
            toast.error("Form submission has failed!");            
        });
	};

    return (
        <section className="p-4 max-w-xl">
            <div className="mt-6 space-y-6 ryh">
                <header>
                    <p className="mt-1 text-sm text-gray-600">
                        Search weather by longitude and latitude
                    </p>
                </header>                
                <div>
                    <InputLabel htmlFor="longitude" value="Longitude" />
                    <TextInput
                        id="longitude"
                        className="mt-1 block w-full"
                        value={data.longitude}
                        onChange={(e) => setData('longitude', e.target.value)}
                        required
                        isFocused
                        autoComplete="longitude"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="latitude" value="Latitude" />
                    <TextInput
                        id="latitude"
                        className="mt-1 block w-full"
                        value={data.latitude}
                        onChange={(e) => setData('latitude', e.target.value)}
                        required
                        isFocused
                        autoComplete="latitude"
                    />
                </div>
                <div className="mt-6 flex items-center gap-4">
                    <PrimaryButton onClick={ () => handleSearch() }>Search</PrimaryButton>
                </div>
                <div className="mt-6 flex items-center gap-4">
                    <CoordinatesTable weatherData={weatherData}/>
                </div>                
                <ToastContainer />
            </div>
        </section>
    );
}

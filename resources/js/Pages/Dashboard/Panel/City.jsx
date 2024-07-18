import React, { useState } from "react";
import axios from 'axios';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { ToastContainer, toast } from 'react-toastify';
import CityTable from "@/Pages/Dashboard/Panel/CityTable";

export default function City({
    historyData
}) {    
    const [data, setData] = useState("");
    // Show history data if given
    const [weatherData, setWeatherData] = useState(historyData);

    const handleChange = (e) => {		
		setData(e.target.value);
	};

    const handleSearch = (e) => {        
		if (data.length < 2) {
            toast.error("Please search a City with atleast 2 letters");
            return;
        }

        toast.loading("Please wait...");
        
        axios.get(route('weather.city'), {
            params: {
                'city': data,
            }            
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
            <div className="mt-6 space-y-6">
                <header>
                    <p className="mt-1 text-sm text-gray-600">
                        Search weather by City name
                    </p>
                </header>                
                <div>
                    <InputLabel htmlFor="city" value="City" />
                    <TextInput
                        id="city"
                        className="mt-1 block w-full"
                        value={data.city}
                        onChange={(e) => handleChange(e)}
                        required
                        isFocused
                        autoComplete="city"
                    />
                </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
                <PrimaryButton onClick={ () => handleSearch() }>Search</PrimaryButton>
            </div>
            <div className="mt-6 items-center gap-4">
                <CityTable weatherData={weatherData}/>
            </div>
            <ToastContainer />
        </section>
    );
}

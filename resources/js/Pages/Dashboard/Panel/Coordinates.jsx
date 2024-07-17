import React, { useState } from "react";
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function Coordinates() {
    
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        longitude: '',
        latitude: '',
    });

    return (
        <section className="p-4 max-w-xl">
            <form className="mt-6 space-y-6">
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
            </form>
        </section>
    );
}

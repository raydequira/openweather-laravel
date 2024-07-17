import React, { useState } from "react";
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function City() {
    
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        city: '',
    });

    return (
        <section className="p-4 max-w-xl">
            <form className="mt-6 space-y-6">
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
                        onChange={(e) => setData('city', e.target.value)}
                        required
                        isFocused
                        autoComplete="city"
                    />
                </div>
            </form>
        </section>
    );
}

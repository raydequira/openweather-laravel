import React, { useState } from "react";
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function History() {
    
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        longitude: '',
        latitude: '',
    });

    return (
        <section className="p-4 max-w-xl">
            <div className="mt-6 space-y-6">
                <header>
                    <p className="mt-1 text-sm text-gray-600">
                        List of recent search
                    </p>
                </header>          
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Search by
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Action
                                </th>                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    <b>City:</b> London
                                </th>
                                <td class="px-6 py-4">
                                    07/22/2024 10:23
                                </td>
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    <a href="#" >View</a>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    <b>City:</b> Manila
                                </th>
                                <td class="px-6 py-4">
                                    07/22/2024 09:25
                                </td>
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    <a href="#" >View</a>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    <b>Coordinates:</b> 41.40338, 2.17403
                                </th>
                                <td class="px-6 py-4">
                                    07/21/2024 09:00
                                </td>
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    <a href="#" >View</a>
                                </td>
                            </tr>                           
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}

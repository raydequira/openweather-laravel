import React from "react";
import dayjs from 'dayjs';

export default function CoordinatesTable({
    weatherData
}) {    
    // You can add info and icons here but for now will keep it simple
    const weather = weatherData;
    return (
        <>        
        { weatherData ? (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Timezone
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>                        
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Day
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Temperature in Day
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Weather
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>                         
                    </tr>
                </thead>
                <tbody>
                    {weather.daily.map((row, index) => {
                        return (
                        <tr>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {weather.timezone}
                            </td>
                            <td class="px-6 py-4">
                                {dayjs.unix(row.dt).format('DD/MM/YYYY')}
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {dayjs.unix(row.dt).format('dddd')}
                            </th>
                            <td class="px-6 py-4">  
                                {row.temp.day}
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {row.weather[0]['main']}
                            </th>
                            <td class="px-6 py-4">  
                                {row.weather[0]['description']}
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        ) : null}
        </>
    );
}

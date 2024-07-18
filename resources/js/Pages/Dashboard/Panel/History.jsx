import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import { ToastContainer, toast } from 'react-toastify';

export default function History() {    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // aside from axios you can also use fetch API
            const response = await fetch(route('weather.histories'));
            if (!response.ok) {
                toast.loading("Error getting the data");
            }
            const data = await response.json();
            setData(data.histories);
            setLoading(false);
        } catch (error) {
            toast.loading(error.message);
            setLoading(false);
        }
      };

      
    return (
        <>
        { loading ? (
            <p>Loading..</p>
        ) : loading === false && data.length === 0 ? (
            <section className="p-4 max-w-xl">
                <p className="mt-1 text-sm text-gray-600">No recent search found.</p>          
            </section>
        ) : (
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
                            {data.map((history, index) => {
                                return (
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        { history.city ? (
                                            <>
                                                <b>City:</b> {history.city}
                                            </>
                                        ) : history.longitude != '' && history.latitude != '' ? (
                                            <>
                                                <b>Coordinates:</b> {history.latitude}, {history.longitude}
                                            </>
                                        ) : null }
                                    </th>
                                    <td class="px-6 py-4">
                                        {dayjs(history.created_at).format('DD/MM/YYYY HH:mm')}
                                    </td>
                                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        <a href="#" >View</a>
                                    </td>
                                </tr>
                                );
                            })}                                                    
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer />
        </section>
        )}
        </>
    );
}

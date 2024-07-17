import React, { useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import City from '@/Pages/Dashboard/Panel/City';
import Coordinates from '@/Pages/Dashboard/Panel/Coordinates';
import History from '@/Pages/Dashboard/Panel/History';
import { Head } from '@inertiajs/react';
import { Tab } from "@headlessui/react";
import TabIcons from '@/Pages/Dashboard/TabIcons';


export default function Index({ auth }) {
    const [currentTab, setCurrentTab] = useState("City");
    const tabs = [
        'City',
        'Coordinates',
        'History'
    ];

    const TabDefault = ({ tabName }) => {
		return (
            <li className="me-2">
                <a href="#" onClick={ () => setCurrentTab(tabName)} className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group" aria-current="page">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="me-2" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <TabIcons tabName={tabName}/>
                </svg>{tabName}
                </a>
            </li>
        );	
	};

    const TabActive = ({ tabName }) => {
		return (
            <li className="me-2">
                <a href="#" onClick={ () => setCurrentTab(tabName)} className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="me-2" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <TabIcons tabName={tabName} />
                    </svg>{tabName}
                </a>
            </li>
        )	
	};

    const Panel = () => {
		switch(currentTab) {
            case 'City':
                return (
                    <City />
                );
            case 'Coordinates':
                return (
                    <Coordinates />
                );
            case 'History':
                return (
                    <History />
                );            
          }	
	};

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 dark:border-gray-700">
                            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                                {tabs.map(tab=> tab == currentTab ? <TabActive tabName={tab} /> : <TabDefault tabName={tab} /> )}
                            </ul>
                            <Panel />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import React, { useState } from "react";

export default function TabIcons({ tabName }) {
    
    const DisplayIcons = () => {
		switch(tabName) {
            case 'City':
                return (
                    <>                        
                        <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/>
                        <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/>                        
                    </>
                );
            case 'Coordinates':
                return (
                    <>
                        <circle cx="12" cy="10" r="3"/>
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
                    </>
                );
            case 'History':
                return (
                    <>
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </>
                );
            default:
                return (
                    <>
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </>
                );
          }	
	};

    return (
        <DisplayIcons/>
    );
}

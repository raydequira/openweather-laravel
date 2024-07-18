import React from "react";

export default function CoordinatesTable({
    weatherData
}) {    

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tr>
                    <td>Coordinates data</td>
                </tr>
            </table>
        </div>
    );
}

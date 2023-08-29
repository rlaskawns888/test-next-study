import { cities } from "./cities-list";
import React, { useEffect, useState } from "react";

// const citiesList = Object.keys(cities);
const citiesList = cities;
// console.log('---- citiesList : ', citiesList);

const CityList = React.memo(({ searchQuery } : { searchQuery: string }) => {
  const [filteredCities, setCities] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;

    setCities(() =>
      citiesList.filter((x) =>
         x.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
    );
   }, [searchQuery]);

  return (
     <ul>
       {filteredCities.map((city) => (
         <li key={city}>
           {city}
        </li>
       ))}
    </ul>
    )
});

export default CityList;
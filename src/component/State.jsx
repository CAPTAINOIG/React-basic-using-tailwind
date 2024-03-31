import React, { useState } from "react";

const State = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [stateSelectDisabled, setStateSelectDisabled] = useState(true);

  const countries = [
    {
      name: "United States",
      states: [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
        "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
        "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
        "New Hampshire", "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
        "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
        "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
        "West Virginia", "Wisconsin", "Wyoming"
      ],
    },
    { name: "Canada", states: ["Ontario", "Quebec", "British Columbia"] },
    {
      name: "Nigeria",
      states: [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
        "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti",
        "Enugu", "FCT (Federal Capital Territory)", "Gombe", "Imo",
        "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
        "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
        "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
      ],
    },
  ];
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState(""); // Reset state when country changes
    setStateSelectDisabled(false); // Enable state select when country is chosen
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col">
        <select
          className="px-4 py-2 mb-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <select
          className={`px-4 py-2 mb-4 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 ${stateSelectDisabled && 'opacity-50 pointer-events-none'}`}
          value={selectedState}
          onChange={handleStateChange}
          disabled={stateSelectDisabled}
        >
          <option value="">Select State/Province</option>
          {selectedCountry &&
            countries
              .find((country) => country.name === selectedCountry)
              .states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
        </select>
      </div>
    </div>
  );
};

export default State;


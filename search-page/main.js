// i asked my brother for some help with direction for this code and also i got aid from this https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array
// loking at this again I thought i did not do this right, because I thought the second search was suppose to filter the first search even more, which explains why I stuggled so much
//https://stackoverflow.com/questions/25972879/how-can-i-add-a-change-event-listener-for-a-styled-select
//https://stackoverflow.com/questions/50827040/how-to-filter-array-of-objects-in-javascript
const stateSelect = document.getElementById("state-select");
const parkTypeSelect = document.getElementById("park-type-select");
const parkInfoContainer = document.getElementById("park-info");

for (const state of locationsArray) {
  const option = document.createElement("option");
  option.value = state;
  option.textContent = state;
  stateSelect.appendChild(option);
}

stateSelect.addEventListener("change", () => {
  const selectedState = stateSelect.value.toLowerCase();
  const selectedParkType = parkTypeSelect.value.toLowerCase();
  const filteredParks = filterParks(selectedState, selectedParkType);
  displayParks(filteredParks);
});

for (const parkType of parkTypesArray) {
  const option = document.createElement("option");
  option.value = parkType;
  option.textContent = parkType;
  parkTypeSelect.appendChild(option);
}

parkTypeSelect.addEventListener("change", () => {
  const selectedState = stateSelect.value.toLowerCase();
  const selectedParkType = parkTypeSelect.value.toLowerCase();
  const filteredParks = filterParks(selectedState, selectedParkType);
  displayParks(filteredParks);
});

function filterParks(selectedState, selectedParkType) {
  if (selectedState === "all" && selectedParkType === "all") {
    return nationalParksArray;
  } else if (selectedState === "all") {
    return nationalParksArray.filter((park) =>
      park.LocationName.toLowerCase().includes(selectedParkType)
    );
  } else if (selectedParkType === "all") {
    return nationalParksArray.filter(
      (park) => park.State.toLowerCase() === selectedState
    );
  } else {
    return nationalParksArray.filter(
      (park) =>
        park.State.toLowerCase() === selectedState &&
        park.LocationName.toLowerCase().includes(selectedParkType)
    );
  }
}

function displayParks(parks) {
  parkInfoContainer.innerHTML = "";

  for (const park of parks) {
    const parkDiv = document.createElement("div");
    parkDiv.innerHTML = `
            <h3>${park.LocationName}</h3>
            <p>Address: ${park.Address}</p>
            <p>City: ${park.City}</p>
            <p>State:${park.State}</p>
            <p>Zip Code: ${park.ZipCode}</p>
            <p>Phone: ${park.Phone}</p>
            <p>Fax: ${park.Fax}</p>
            <p>Latitude: ${park.Latitude}</p>
            <p>Longitude: ${park.Longitude}</p>
            <a href="${park.Visit}" target="_blank">Visit Website</a>
        `;
    parkInfoContainer.appendChild(parkDiv);
  }
}

displayParks(nationalParksArray);

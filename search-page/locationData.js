const locationsArray = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "DC",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

// used dmg image gallery as a guideline and this link from stackkoverflow https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array


const locationElement = document.querySelector("#parkLocation")

window.onload = main;

function main() {
    locationDrop();
}

function locationDrop(){
    for(const location of locationsArray) {
        const option = document.createElement("option")
        option.value = location
        option.innerText = location;
        locationElement.appendChild(option)
    }
}
const mountainSelect = document.getElementById("mountainSelect");
const mountainInfo = document.getElementById("mountainInfo");

mountainsArray.forEach((mountain, index) => {
  let option = document.createElement("option");
  option.value = index;
  option.textContent = mountain.name;
  mountainSelect.appendChild(option);
});

mountainSelect.addEventListener("change", function () {
  let selectedMountain = mountainsArray[this.value];
  const formattedCoords = `Latitude: ${selectedMountain.coords.lat}, Longitude: ${selectedMountain.coords.lng}`;
  document.getElementById("mountainName").textContent = selectedMountain.name;
  document.getElementById("mountainImage").src =
    "images/" + selectedMountain.img;
  document.getElementById("mountainDesc").textContent = selectedMountain.desc;
  document.getElementById("mountainElevation").textContent =
    selectedMountain.elevation;
  document.getElementById("mountainEffort").textContent =
    selectedMountain.effort;
  document.getElementById("mountainCoords").textContent = formattedCoords;
});

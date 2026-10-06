const form = document.getElementById('citySearchForm');
const input = document.getElementById('citySearchInput');

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = input.value.trim();

    if (!city) {
        alert("provide a city")
    }
    try {
        const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
        const data = await response.json();

        if (!response.ok) {
            alert(data.message)
            return
        }
        showWeather(data)
    } catch (error) {
        console.log(error.message)
    }
})
function showWeather(data){
    document.getElementById("locationName").textContent = `${data.city}, ${data.country}`;
    document.getElementById("displayFeelsLike").textContent = `${data.feels_like}°C`;
    document.getElementById("displaySeaLevel").textContent = `${data.sea_level}`;
    document.getElementById("displayGrndLevel").textContent = `${data.grnd_level}`;
    // document.getElementById("").textContent = `${}`
}
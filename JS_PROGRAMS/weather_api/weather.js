const apiKey = "d41d10b573620678830555a0a5890d92";
document.getElementById("btn").addEventListener("click", async () => {
    const country = document.getElementById("country").value.trim();
    const city = document.getElementById("city").value.trim();
    if (!country || !city) {
        alert("Please enter country and city");
        return;
    }
    try {
        const currentUrl =
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
        const forecastUrl =
            `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=metric`;
        const currentRes = await fetch(currentUrl);
        if (!currentRes.ok) {
            alert("City not found");
            return;
        }
        const currentData = await currentRes.json();
        const forecastRes = await fetch(forecastUrl);
        const forecastData = await forecastRes.json();
        let output = `
        <div class="current-weather">
            <h3>Today's Weather</h3>
            <p><strong>Temperature:</strong> ${currentData.main.temp} °C</p>
            <p><strong>Weather:</strong> ${currentData.weather[0].description}</p>
        </div>
        <h3 class="forecast-title">5-Day Forecast</h3>
        <div class="forecast-container">
        `;
        const dailyForecasts = forecastData.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );
        dailyForecasts.forEach(day => {
            const date = new Date(day.dt_txt);
            output += `
            <div class="forecast-card">
                <h4>${date.toLocaleDateString()}</h4>
                <p>${day.main.temp} °C</p>
                <p>${day.weather[0].description}</p>
            </div>
            `;
        });
        output += `</div>`;
        document.getElementById("weather").innerHTML = output;
    } catch (error) {
        alert("Error fetching weather data");
        console.log(error);
    }
});
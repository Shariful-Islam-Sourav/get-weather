//Error Handling
document.getElementById("error-message").style.display = "none";
//Default
const defaultCity = () => {
  const url = `http://api.weatherapi.com/v1/current.json?key=090c938d753845dc99d192901210109&q=Dhaka`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data));
};
defaultCity();
//Search City
const searchCity = () => {
  const input = document.getElementById("input-value");
  const inputValue = input.value;
  const url = `http://api.weatherapi.com/v1/current.json?key=090c938d753845dc99d192901210109&q=${inputValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data));
  input.value = "";
};
//Show Details
const showDetails = (cityInfo) => {
  const errorMsg = document.getElementById("error-message");
  const container = document.getElementById("info-container");
  container.textContent = "";
  try {
    const details = document.createElement("div");
    details.innerHTML = `
          <img src="${cityInfo.current.condition.icon}">
          <h1>${cityInfo.current.temp_c}°C</h1>
          <h3>${cityInfo.location.name},${cityInfo.location.country}</h3>
          <p>${cityInfo.current.condition.text}</p>
      `;
    container.appendChild(details);
    errorMsg.style.display = 'none';
  } catch (error) {
    errorMsg.style.display = "block";
  }
};

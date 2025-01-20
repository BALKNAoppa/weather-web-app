Weather App
This React-based weather app provides the current weather information for any city. The app uses the WeatherAPI to fetch weather data and displays it based on day and night conditions. The interface features a search bar to allow users to input the city of their choice.

Features
City Search: Allows the user to search for a city and get the latest weather forecast.
Day and Night Sides: The app divides the screen into two parts—one showing weather data for the day and the other for the night.
Weather Data: Displays maximum and minimum temperatures, weather conditions, and the current date.
Responsive Design: The interface adapts to different screen sizes.
Technologies Used
React: JavaScript library for building user interfaces.
WeatherAPI: API service used to fetch weather data.
CSS: Styling for the components.
Tailwind CSS: Utility-first CSS framework used for layout and styling.
Installation
Clone the repository:

bash
Copy
Edit
git clone <repo_url>
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
File Structure
App.js: Main component that manages the state and renders other components.
SearchBar.js: Search bar component for entering the city.
DaySide.js: Displays the weather data for the day.
NightSide.js: Displays the weather data for the night.
App.css: Custom CSS file for styling.
Usage
On the landing page, you can enter the name of any city in the search bar.
The weather for the selected city is displayed, showing details like the maximum and minimum temperature, as well as the weather condition.
The background changes based on the time of day (day vs. night).
API Key
You need to replace the weatherApiKey variable with your own WeatherAPI key to make successful API requests.

js
Copy
Edit
const weatherApiKey = "YOUR_API_KEY";
You can sign up and obtain an API key from the WeatherAPI website.

License
This project is open source and available under the MIT License.
import HomePageComponent from "./Components/HomePageComponent";
import "./App.css";
import image from "./Assets/weatherImage.png"

function App() {
  return (
    <div
     className="weatherContainer"
     style={{
      backgroundImage: `url(${image})`,
    }}
    >
      <h1 style={{ color:"Black", padding: "10px", margin: "20px", }}>
        Weather Forecast{" "}
      </h1>

      <HomePageComponent />
    </div>
  );
}

export default App;

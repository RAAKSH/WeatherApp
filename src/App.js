import HomePageComponent from "./Components/HomePageComponent";
import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundImage: "url(/img/weatherImage1.jpg)",
        backgroundRepeat: "none",
        width: "2040 px",
        height: "1000px",
      }}
    >
      <h1 style={{ color: "whitesmoke", padding: "10px", margin: "20px" }}>
        Weather Forecast{" "}
      </h1>

      <HomePageComponent />
    </div>
  );
}

export default App;

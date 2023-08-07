import Header from "./components/header/Header";
import "./assets/styles/App.scss";
import Wallpaper from "./components/wallpaper/Wallpaper";
import Offers from "./components/offers/Offers";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Wallpaper />
      <Offers/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import LogoGallery from "./LogoGallery";
import ShopTabs from "./ShopTabs";


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <LogoGallery></LogoGallery>
        <ShopTabs></ShopTabs>
      </header>
    </div>
  );
}

export default App;

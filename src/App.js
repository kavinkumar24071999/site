import React, {useEffect, useState} from 'react';
import "./App.css";
import Home from "./pages/Home";


const App = () => {
  const [showHome, setShowHome] = useState(false);
  const [canSlideUp, setSlideUp] = useState(false);
  useEffect(() => {
    setSlideUp(true)
    setTimeout(() => {
      setShowHome(true)
    }, 3000)
  });

  return (
    <div className={'body page'}>
      <h1 className="text page__text" data-text="Picture_poets">
        Picture_poets
      </h1>
      {showHome && (
        <div className={`home loader-animation${canSlideUp && '-fade-in'}`}>
          <Home/>
          <div>We freeze memories</div>
          <div>Since 2024</div>
        </div>
      )}
    </div>
  );
};
export default App;
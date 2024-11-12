import { useState } from 'react';
import { Slider } from '@mui/material';
import './App.css';

function valuetext(value) {
  return `${value}`;
}

function App() {
  const [fontSize, setFontSize] = useState(16);  // Valeur initiale du slider
  const [fontSizeChildren, setFontSizeChildren] = useState(1);
  
  const handleSliderChange = (event, newValue) => {
    setFontSize(newValue);  // Met à jour l'état à chaque changement de valeur
  };
  
  const handleSliderChildrenChange = (event, newValue) => {
    setFontSizeChildren(newValue);  // Met à jour l'état à chaque changement de valeur
  };
  return (
    <div className='general'>
      <div className="parent" style={{ fontSize: `${fontSize}px` }}>
        <h1 className="enfant"  style={{ fontSize: `${fontSizeChildren}em` }}>Texte enfant</h1>
      </div>

      <div className='param'>
        
      <div className="slider">
        <h2>Taille de la police du parent (px)</h2>
        <Slider          
          aria-label="Small steps"
          value={fontSize}  
          onChange={handleSliderChange}
          getAriaValueText={valuetext}
          step={2}
          marks
          min={5}
          max={25}
          valueLabelDisplay="auto"
        />
      </div>

      <div className="slider">
        <h2>Taille de la police de l'enfant (em)</h2>
        <h3>taille de police du parent ( {fontSize}px ) x taille de la police de l'enfant ( {fontSizeChildren}px ) <br/>= taille de la police effective ( {fontSize*fontSizeChildren}px )</h3>
        <Slider          
          aria-label="Small steps"
          value={fontSizeChildren}  
          onChange={handleSliderChildrenChange}
          getAriaValueText={valuetext}
          step={1}
          marks
          min={1}
          max={4}
          valueLabelDisplay="auto"
        />
      </div>

      </div>

    </div>
  );
}

export default App;

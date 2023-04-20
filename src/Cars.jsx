import React, {useState} from 'react'
import models from './assets/models.jpg'
import model3 from './assets/model3.jpg'
import modelx from './assets/modelx.jpg'
import modely from './assets/modely.jpg'

export default function Cars() {
    const[selected, setSelected] = useState(2);

    const btnClick = (index) => {
        setSelected(index);
    }

  return (
    <div className='cars'>
        <div className='header'>
            <h1>Schedule a Demo Drive</h1>
            <p>
                Demo Drive a Tesla at a store near you. Drivers must have a valid U.S. 
                driver's license and be 18 years of age or older.
            </p>
        </div>

        <div className="car-selection">
            <div>
                <div className="car-model"><img src={models} className={selected === 1 ? 'show' : ''}/></div>    
                <div className="car-model"><img src={model3} className={selected === 2 ? 'show' : ''}/></div>    
                <div className="car-model"><img src={modelx} className={selected === 3 ? 'show' : ''}/></div>    
                <div className="car-model"><img src={modely} className={selected === 4 ? 'show' : ''}/></div>    
            </div>

            <div className="buttons">       
                <button className={selected === 1 ? 'selectedButton' : ''} onClick={()=> btnClick(1)}>Model S</button>
                <button className={selected === 2 ? 'selectedButton' : ''} onClick={()=> btnClick(2)}>Model 3</button>
                <button className={selected === 3 ? 'selectedButton' : ''} onClick={()=> btnClick(3)}>Model X</button>
                <button className={selected === 4 ? 'selectedButton' : ''} onClick={()=> btnClick(4)}>Model Y</button>
            </div>
        </div>
    </div>
  )
}

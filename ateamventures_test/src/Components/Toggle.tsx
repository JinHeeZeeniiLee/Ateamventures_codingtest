import React, { useState } from 'react';
import '../Styles/Toggle.css';


const Toggle: React.FC = () => {

    const [isOn, setIsOn] = useState(false);

    const toggleOnHandler = () => {
        setIsOn(!isOn);
    }

    return (
        <>
            <div className="toggle_container">
                {isOn ? <div className="toggle_circle" onClick={toggleOnHandler}/> : <div className="toggle_circle"/>}
            </div>
        </>
    )
}

export default Toggle;
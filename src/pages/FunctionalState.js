import { useState } from "react";

const FunctionalState = () => {
    let [sampleContent, changeElement] = useState ("Hello World");
    let [color, changeColor] = useState ("blue"); 

    function changeSomething(){
        changeElement("WOw Nabago Na");
        color == "blue" ? changeColor("yellow") : changeColor("blue");
     
    }
    return ( 
        <>
            <h1 style={{background: color}}>{sampleContent}</h1>
            <button onClick={() => changeSomething()}>Change Sample Element</button>
        </>
     );
}
 
export default FunctionalState;
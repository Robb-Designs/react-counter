import {useState} from 'react';


export default function AdvancedCounter() {
    const [count, setCount] = useState(0); //Set initial default state to 0
    
    // Adding 
    function handleAdd(){
        setCount(count + 1);
        console.log(count)
    }

    // Subtracting
    function handleSub(){
        setCount(count -1);
        console.log(count)
    }
    return(
    
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={handleAdd}>+ Add</button>
                <button onClick={handleSub}>- Sub</button>
            </div>
        </div>

    );
}
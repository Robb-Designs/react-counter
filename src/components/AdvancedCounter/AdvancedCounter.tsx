import {useState, useEffect} from 'react';


export default function AdvancedCounter() {
    const [count, setCount] = useState(0); //Set initial default state to 0
    
    // Adding 
    function handleAdd(){
        setCount(prev => prev + 1); //use what React knows the value is, better than setCount(count + 1)
      
    }

    // Subtracting
    function handleSub(){
        setCount(prev => prev - 1);
       
    }


    useEffect(() => {}, [count])

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
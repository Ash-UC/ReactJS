import React, {useState, useEffect} from 'react';

export default function HelloWorld() {

    const [value, setValue] = useState({
        value: 0,
        text: 'func'
    });

    useEffect(() => {
        console.log("object", value);
    }, [value]);

    useEffect(() => {
        console.log("initialized")
    },[]);

    return (
        <div>
            <span> Function : {value.value}</span>
            <button onClick={() => setValue({...value, value: value.value + 1})}>Increment</button>
        </div>
    )
}

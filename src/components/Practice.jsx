import React, {useState} from "react";


const Button = (props) =>{
    const handleClick = ()=>props.num(props.incrementValue)
    return(
        <>
        <button
        onClick={handleClick}
        >
            {props.incrementValue}
        </button>
        </>
    )
}

const Display = (props) => <div>{props.message}</div>

export const Practice = () =>{
    const [count, setCounter] = useState(0)
    const incrementation = (increased)=>setCounter(count + increased)
    const decrementation = (increased)=> setCounter(count + increased)

    return(
        <>
        <Button num={incrementation} incrementValue={1}/>
        <Button num={incrementation} incrementValue={2}/>
        <Button num={incrementation} incrementValue={3}/>
        <Button num={incrementation} incrementValue={4}/>

        <Button num={decrementation} incrementValue={-1}/>
        <Button num={decrementation} incrementValue={-2}/>
        <Button num={decrementation} incrementValue={-3}/>
        <Button num={decrementation} incrementValue={-4}/>
        <Display message={count} />
        </>
    )
}
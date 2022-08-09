import React, {useState} from "react";


const Button = (props) => {
    const handleClick = ()=> props.num(props.incrementValue)
    return (
        <>
        <button
        onClick={handleClick}
        >
            {props.incrementValue}
        </button>
        </>
    )
}

const Display = props => <div>{props.message}</div>


export const Practice = () =>{
    const numb ={
        vat:"this is an object"
    }
    const [count, setCounter] = useState(numb.vat)
    const incrementation = (increased) => setCounter(count + increased)
   
    return (
        <>
        <Button num={incrementation} incrementValue={1}/>
        <Button num={incrementation} incrementValue={2}/>
        <Button num={incrementation} incrementValue={3}/>
        <Button num={incrementation} incrementValue={4}/>

        <Button num={incrementation} incrementValue={-1}/>
        <Button num={incrementation} incrementValue={-2}/>
        <Button num={incrementation} incrementValue={-3}/>
        <Button num={incrementation} incrementValue={-4}/>
        <Display message={count} />
        </>
    )
}


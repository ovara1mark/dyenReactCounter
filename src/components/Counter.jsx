import React, {useState} from "react";
import {Text} from "./Text";
import {Button} from "./Button";

export const Counter = () =>{
    const [count, setCount] = useState(0);

    return (
        <>
        <Text type={"h1"}>Counter</Text>
        <Text type={"h2"}>Counter</Text>
        <Text type={"h3"}>Counter</Text>
        <Text type={"h4"}>Counter</Text>
        <Text type={"h5"}>Counter</Text>
        <Text type={"h6"}>Counter</Text>
        <Text count={count} children={"This is a new increased number: "}/>

        <Button
        onClick={()=>{
            setCount(count + 1);
        }}
        type="secondary"
        borderRadius={"2px"}
        fontSize={"1rem"}
        >
            Increase
        </Button>
        </>
    );
};
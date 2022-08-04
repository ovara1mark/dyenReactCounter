import React from "react";

export const Button = ({onClick, children, type, borderRadius, fontSize})=>{
    if (type === "primary") {
        return (
            <button
                onClick={onClick}
                style={{
                    backgroundColor:"transparent",
                    border: "1px solid purple",
                    color: "purple",
                    borderRadius: borderRadius,
                    fontSize:fontSize,
                }}
            >
                {children}
            </button>
        );
    }

    if(type === "secondary") {
        return(
            <button
                onClick={onClick}
                style={{
                    backgroundColor: "purple",
                    border: "1px solid purple",
                    color: "red",
                    borderRadius:borderRadius,
                    fontSize:fontSize,
                }}
            >
                {children}
            </button>
        )
    }

    return (
        <button style={{borderRadius}} onClick={onClick}>
            {children}
        </button>
    )
}
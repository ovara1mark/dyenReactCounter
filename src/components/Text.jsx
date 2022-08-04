import React from "react";

export const Text = ({count, children, type}) =>{
    if(type === "h1"){
        return <h1 style={{color:"red"}}>{count} {children}</h1>
    }

    if(type==="h2"){
        return <h2 style={{color:"red"}}>{count} {children}</h2>
    }
    if(type==="h3"){
        return <h3 style={{color:"blue"}}>{count} {children}</h3>
    }
    if(type==="h4"){
        return <h4 style={{color:"green"}}>{count} {children}</h4>
    }
    if(type==="h5"){
        return <h5 style={{color:"yellow"}}>{count} {children}</h5>
    }
    if(type==="h6"){
        return <h6 style={{color:"brown"}}>{count} {children}</h6>
    }

    return (
        <>
        <p>
        {children}
        <span>
            {count} 
        </span>            
        </p>

        </>

    );
};
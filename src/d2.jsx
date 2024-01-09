import React from "react"
// Functional component need to do the import
import { useState } from "react";
import MyProfile from "./MyProfile"
import ShoppingList from "./ShoppingList";

// Props perimeter to fill it all
function MyButton({count, onClick}){
    return <button onClick={onClick}>{`Click ${count} times`}</button>
} 



// function MyButton() {
//     // This decide is the component is separetely handled.
//     // const[count, setCount] = useState(0);
//     function handleClick(){
//         // alert("Button is clicked.")
//         setCount(count + 1);
//     }
//     return (
//         <button onClick={handleClick}>
//             {`Clicked ${count} times.`}
//         </button>
//     )
// }

// To share data between components, rather than saving the state in a separate function, integrate it into the export part.

export function DayTwo() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    const isLoggedIn = true;
    return (
        <div>
            <h3>Welcome to my App on Day Two!</h3>
            {/* This is self closing tag */}
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
            {!isLoggedIn ? "" : <MyProfile/>}
            <ShoppingList/>
            
            {/* This is cleaner without adding additional div */}
            {/*
            --Approach 2-- 
            {!isLoggedIn && <MyProfile/>} 
            */}

            {/*
            --Approach 3--
             Declaring the if and else. Can be put outside too

            let content;
            if(isLoggedIn){
                constent = <MyProfile/>
            } else {
                content = <div></div>
            }

            {content} at Return
             */}
        </div>
    )
}

export default DayTwo
import React from "react"
import MyProfile from "./MyProfile"
import ShoppingList from "./ShoppingList";

function MyButton() {
    return (
        <button>
            I'm a button!
        </button>
    )
}

export function DayTwo() {
    const isLoggedIn = true;
    return (
        <div>
            <h3>Welcome to my App on Day Two!</h3>
            {/* This is self closing tag */}
            <MyButton/>
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
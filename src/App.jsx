import React from 'react';

function getUsers() {
    console.log("Here!");
    fetch('/subscribers')
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
};

export default function App() {
    return (
        <div>
            <h1>Welcome { new Date().toString() }</h1>
            <button onClick={getUsers}>Slap Dat!</button>
        </div>
    )
}
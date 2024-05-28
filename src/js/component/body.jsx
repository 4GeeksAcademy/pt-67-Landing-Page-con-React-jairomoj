import React from "react";
import Jumbotron from "./jumbotron";
import Card from "./card";

const Body = () => {
    return (
        <div className="container">
            <Jumbotron />
            <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Body;
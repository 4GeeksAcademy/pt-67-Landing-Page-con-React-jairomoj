import React from "react";
import Jumbotron from "./jumbotron";
import Card from "./card";

const Body = () => {
    return (
        <div className="container">
            <Jumbotron />
            <div className="row">
                <Card className="col-sm-12 col-md-3 col-lg-3" />
                <Card className="col-sm-12 col-md-3 col-lg-3" />
                <Card className="col-sm-12 col-md-3 col-lg-3" />
                <Card className="col-sm-12 col-md-3 col-lg-3" />
            </div>
        </div>
    );
}

export default Body;
import React from "react";

const Card = () => {
    return (
        <div className="card mx-auto mb-3 px-0" style={{ width: "18rem" }}>
            <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit facilisis malesuada.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
}

export default Card;
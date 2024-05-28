import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-sm-1 p-md-2 p-lg-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-12 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit facilisis malesuada. Pellentesque non odio vitae justo rutrum vehicula et non justo. Cras pulvinar, odio eget porttitor varius, purus tellus eleifend elit, at rutrum lorem massa vel ligula.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    );
}

export default Jumbotron;
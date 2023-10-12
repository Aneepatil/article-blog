import React from "react";
import { Link } from "react-router-dom";

const ArticleListing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-bold mb-3">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <p className="card-text">
                <span className="text-bold">Posted On :</span> <span>2 days ago</span>
              </p>
              <div className="d-flex justify-content-around">
                <Link to={"/"} className="btn btn-secondary">
                  View
                </Link>
                <Link to={"/"} className="btn btn-success">
                  Update
                </Link>
                <Link to={"/"} className="btn btn-danger">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-bold mb-3">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <p className="card-text">
                <span className="text-bold">Posted On :</span> <span>2 days ago</span>
              </p>
              <div className="d-flex justify-content-around">
                <Link to={"/"} className="btn btn-secondary">
                  View
                </Link>
                <Link to={"/"} className="btn btn-success">
                  Update
                </Link>
                <Link to={"/"} className="btn btn-danger">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleListing;

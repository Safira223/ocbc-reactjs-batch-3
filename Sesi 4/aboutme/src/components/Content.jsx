import React from "react";

function Content() {
    return (
      <>
        <div className="p-5 mb-4 bg-light rounded-3 border">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">About Me</h1>
            <p className="col-md-8 fs-4">My name is Fira. I'm 22 years old. <br />
            I'm a hard working person who is able to analyze and solve problems, responsible, trustworthy, discipline, and commitment. <br />
            Recent college graduate with a degree in Computer Science who is competent in a variety of programming languages, platforms and tools.</p>
            <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Example Button</button>
          </div>
        </div>
      
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">This is my first modal box</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </>
      
  
    );
  }

export default Content;
import React from "react";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div 
      className="text-center p-4 mt-5"
      style={{
        background: "linear-gradient(135deg, #1a1a2e, #16213e)", 
        color: "#00eaff"
      }}
    >
      <Row className="align-items-center">
       
        <Col lg={7}>
          <p 
            style={{
              textAlign: "justify",
              fontSize: "1rem",
              lineHeight: "1.6",
              padding: "0 15px",
              color:"white"
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas 
            tempora similique doloribus quibusdam accusamus, dolor tempore 
            consequuntur, culpa et est ex nobis, non suscipit. Autem inventore 
            blanditiis id repellat corporis!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nulla voluptatem repellendus rerum alias dolore fuga velit mollitia voluptatum ducimus magni libero doloribus excepturi vel tempora, in quam recusandae voluptate.
          </p>
        </Col>
             
        <Col lg={5} className="text-light">
          <h3 style={{ color: "#ff00ff", marginBottom: "10px" }}>
            Feedbacks about Books
          </h3>
          <div className="d-flex flex-column align-items-center">
            <textarea
              rows="5"
              placeholder="Enter feedbacks about given booklists"
              className="form-control mb-2"
              style={{
                width: "90%",
                backgroundColor: "#222",
                color: "#00eaff"
              }}
            ></textarea>
            <button 
              className="btn btn-dark" 
              style={{
              
                color: "#fff",
                border: "none",
                padding: "8px 20px"
              }}
            >
              Submit
            </button>
          </div>
        </Col>
      </Row>

    
      <p className="mt-4" style={{ fontSize: "0.9rem", color: "#00eaff" }}>
        &copy; 2024 Redux Book Manager. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

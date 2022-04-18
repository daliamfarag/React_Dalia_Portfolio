import React from "react";
import coverImage from "../../assets/images/general-design.jpeg";
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <section id="about-me">
      <Row className="row">
        <Col lg={2} md={12} sm={12}>
          <h1 id="me-title">About me</h1>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <img
            id="picture-Dalia"
            src={coverImage}
            style={{
              width: "65%",
              borderColor: "--tertiary-color",
              borderWidth: 3,
            }}
            
          />
        </Col>
        <Col lg={6} md={12} sm={12}>
          <p id="me-text">
          Highly-motivated Mechanical Project Engineer Graduate with 3 years of work experience. 
           Experienced in design, reliability development, troubleshooting, data analysis, experimentation, and testing.
           Motivated maintenance professional with strong mechanical aptitude and knowledge of system operations. 
            Resourceful, self-driven, and analytical with capabilities of completing multiple projects in the manufacturing, biotechnology and robotic industries. 
            Effective team memeber; able to feed the team with the positive knowledge to achieve the desired goals. 
          </p>
          <p>
          Created complex mechanical components and assemblies using Solidworks.
          Accomplished CAD drawings revision control, BOM updates, and machine shop drawings
          requirements for newly engineered components through Solidworks. 
          Designed tests to confirm accuracy  of FEA models of composite robotic components. 
        </p>
        <p>
          Managed all phases of the design process for a multitude of new and improved robotic 
          components, parts, assemblies and subassemblies, including drafting, dimensioning, tolerancing,
          prototyping, integration, and testing. Developed static and dynamic design and analysis of mechanical 
          systems and equipment. Performed mechanical analysis including statics and dynamics, finite element modeling 
          and material properties. 
        </p>
        </Col>
      </Row>
    </section>
  );
}

export default About;

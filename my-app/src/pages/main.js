
import React from "react";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";




const About = () => (
  <div>
    <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
      <h1>Clicky Game</h1>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Clicky Game</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <ul>

            <li>
              <a href="../assets/images/Aragon.jpg"><img src="../assets/images/Aragon.jpg" onClick="../assets/images/Aragon.jpg" /></a>
            </li>
            <li>
              <a href="../assets/images/Arwen.jpg"><img src="../assets/images/Arwen.jpg" onClick="../assets/images/Arwen.jpg" /></a>
            </li>
            <li>
              <a href="../assets/images/Boromir.jpg"><img src="../assets/images/Boromir.jpg" onClick="../assets/images/Boromir.jpg" /></a>
            </li>
            <li>
              <a href="../assets/images/Eowyn.jpeg"><img src="../assets/images/Eowyn.jpeg" onClick="../assets/images/Eowyn.jpeg" /></a>
            </li>
            <li>
              <a href="../assets/images/Frodo.jpg"><img src="../assets/images/Frodo.jpg" onClick="../assets/images/Frodo.jpg" /></a>
            </li>
            <li>
              <a href="../assets/images/GandalfTheGrey.jpg"><img src="../assets/images/GandalfTheGrey.jpg" onClick="../assets/images/GandalfTheGrey.jpg" /></a>
            </li>
            <li>
              <a href="../assets/images/Gimli.jpg"><img src="../assets/images/Gimli.jpg" onClick="../assets/images/Gimli.jpg" /></a>
            </li>
            <li>
              <a href="../assets/images/Gollum.jpg"><img src="../assets/images/Gollum.jpg" onClick="../assets/images/Gollum.jpg" /></a>
            </li>
            <li>
              <a href="../assets/images/Legolas.jpg"><img src="../assets/images/Legolas.jpg" onClick="../assets/images/Legolas.jpg" /></a>
            </li>
            <li>
              <a href="../assets/images/MerryBrandyBuck.jpg"><img src="../assets/images/MerryBrandyBuck.jpg" onClick="../assets/images/MerryBrandyBuck.jpg" /></a>
            </li>
            <li>
              <a href="../assets/images/PippinTook.jpg"><img src='"../assets/images/PippinTook.jpg"' onClick="../assets/images/PippinTook.jpg" /></a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Main;
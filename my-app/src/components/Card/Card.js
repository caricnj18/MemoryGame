import React from "react";

import "./Card.css";
import aragon from "../Assets/images/Aragon.jpg";
import arwen from "../Assets/images/Arwen.jpg";
import boromir from "../Assets/images/Boromir.jpg";
import eowyn from "../Assets/images/Eowyn.jpeg";
import frodo from "../Assets/images/Frodo.jpg";
import gandalf from "../Assets/images/GandalfTheGrey.jpg";
import gimli from "../Assets/images/Gimli.jpg";
import gollum from "../Assets/images/Gollum.jpg";
import legolas from "../Assets/images/Legolas.jpg";
import brandybuck from "../Assets/images/MerryBrandyBuck.jpg";
import pippintook from "../Assets/images/PippinTook.jpg";
import samwise from "../Assets/images/SamwiseGamgee.jpg";

const divStyle01 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${aragon})`
};
const divStyle02 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${arwen})`
};
const divStyle03 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${boromir})`
};
const divStyle04 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${eowyn})`
};
const divStyle05 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${frodo})`
};
const divStyle06 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${gandalf})`
};
const divStyle07 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${gimli})`
};
const divStyle08 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${gollum})`
};
const divStyle09 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${legolas})`
};
const divStyle10 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${brandybuck})`
};
const divStyle11 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${pippintook})`
};
const divStyle12 = {
  width: 250, 
  height: 250,
  backgroundImage: `url(${samwise})`
};

const Card = props => (
  <div className="card">
    <div className="img-container"> 
  <div role ="img" aria-label="click item" className="click-item01" style={divStyle01}></div>
  <div role ="img" aria-label="click item" className="click-item02" style={divStyle02}></div>
  <div role ="img" aria-label="click item" className="click-item03" style={divStyle03}></div>
  <div role ="img" aria-label="click item" className="click-item04" style={divStyle04}></div>
  <div role ="img" aria-label="click item" className="click-item05" style={divStyle05}></div>
  <div role ="img" aria-label="click item" className="click-item06" style={divStyle06}></div>
  <div role ="img" aria-label="click item" className="click-item07" style={divStyle07}></div>
  <div role ="img" aria-label="click item" className="click-item08" style={divStyle08}></div>
  <div role ="img" aria-label="click item" className="click-item09" style={divStyle09}></div>
  <div role ="img" aria-label="click item" className="click-item10" style={divStyle10}></div>
  <div role= "img" aria-label="click item" className="click-item11" style={divStyle11}></div>
  <div role= "img" aria-label="click item" className="click-item12" style={divStyle12}></div>
  </div>
  </div>
);

export default Card;

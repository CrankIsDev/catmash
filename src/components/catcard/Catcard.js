/* Display cat ranking */
import React, { Component } from "react";


import "./Catcard.css";

const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const urlCat = "https://latelier.co/data/cats.json"

class Catcard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    
    fetch(proxyUrl + urlCat)

    .then(res => res.json())
     
    .then(data => this.setState({ images: data.images }))
    
    .catch(error => {
      console.log(error);
    });
    
  }

  render() {
    const { images } = this.state;
    
    return(
     <div>
       {images.map((image, i) => 
          <img key={i} src={image.url} alt="" /> 
       )}
     </div>
    )
  } 
};

export default Catcard;
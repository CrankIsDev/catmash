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
     <div className="container">
       {images.map((image, i) =>
       <div key={i} className="card">
          <img  src={image.url} alt="" className="cat" />
          <div>
            <p>Résultat:</p>
          </div>
       </div>
       )}
     </div>
    )
  } 
};

export default Catcard;
/* Display cat ranking */
import React, { Component } from "react";
import axios from "axios";

import "./Catcard.css";

class Catcard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: {
        url: "",
        id: ""
      }
    };
  }

  componentDidMount() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const urlCat = "https://latelier.co/data/cats.json"
    axios.get(proxyUrl + urlCat)
    .then(res => {
      console.log(res.data);
      this.setState({ images: res.data.images[0].url});
      console.log(res.data.images[0].url);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
     <div></div>
    )
  } 
};

export default Catcard;
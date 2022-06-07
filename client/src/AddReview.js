import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import Axios from 'axios';
import background from "./background.jpg";
import { RiArrowGoBackFill, RiWindowsFill } from "react-icons/ri";
import { Rating } from 'react-simple-star-rating';
import Select from 'react-select';
import Creatable from 'react-select/creatable';

export default function AddReview() {

  //Seteaza constantele la valoarea introdusa
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [user,setUser] = useState("");
  const handleRating = (rate) => {
    setRating(rate)
  }
  //Dropdown in care poti adauga
  const movies = [
    { label: name, value: name }
  ];

  //Adauga in baza de date (?)
  const addToBD = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      review: review,
      rating: rating
    }).then(() => {
      console.log("succes");
    });
  };

  //TEST
  const addToLog = () => {
    console.log(name + ": " + review + ": " + rating + ": " + user);
    if(!alert('Alert For your User!')){window.location.reload();}
  }

  return (
    <div className="App"><b>
      <div className="AppAddReview">
        <Link to="..">
          <div className="goBack">
            <RiArrowGoBackFill /></div></Link>
        <div className="containerAdd">
          <h1 class="titleh1">Adauga un review</h1>
          <form className="formAdd" ><br />
            <label>Numele filmului:</label><br />
            <Creatable
              options={movies} onChange={opt => setName(opt.value)}
            />
            {/* <textarea type="text" size="50" className="movienamebox" onChange={(event) => {
              setName(event.target.value);
            }}></textarea> */}
            <br /><br />
            <label>Review:</label><br />
            <textarea type="text" size="50" className="moviereviewbox" onChange={(event) => {
              setReview(event.target.value);
            }} /><br />
            <label>Rating:</label><br />
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={50}
              label
              transition
              fillColor='orange'
              emptyColor='gray'
              className='foo'
            />
            {rating + "/100"} 
            <br />
            <label>Your name:</label><br />
            <textarea type="text" size="30" className="usernamebox" onChange={(event) => {
              setUser(event.target.value);
            }} />
          </form>

          <div className="test">
            <button className="button-test" onClick={addToLog}>Console</button>
          </div>
        </div>
      </div>
    </b>
    </div>
  );
}
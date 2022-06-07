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
import { RiArrowGoBackFill } from "react-icons/ri";
import { Rating } from 'react-simple-star-rating';
import Select from 'react-select';
import Creatable from 'react-select/creatable';

export default function ReadReview() {

  //COPIAT DIN AddReview, adauga valori constantelor
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [user,setUser] = useState("");
  const handleRating = (rate) => {
    setRating(rate)
  }

  const [movie, setMovie] = useState([]);

  //Citeste din baza de date (?)
  const getMovies = () => {
    Axios.get("http://localhost:3001/movies",).then((response)=>{
      console.log(response);
    }) ;
  }

  //Dropdown, vreau sa adaug ce e in BD
  const movies = [
    { label: 'Titanic', value: 'Titanic' }
  ];

  //TEST
  const addToLog = () => {
    console.log(name + ": " + review + ": " + rating);
  }

  //EROAREA este pentru ca nu am inca datele din baza de date, dar ar trebui doar sa schimb la SELECT si la RATING
  return (
    <div className="App"><b>
      <div className="AppReadReview">
        <Link to="..">
          <div className="goBack">
            <RiArrowGoBackFill /></div></Link>
        <div className="containerAdd">
          <form className="formAdd" ><br />
            <label>Numele filmului:</label><br />
            <Select
              options={movies} onChange={opt => setReview(review)}
            />
            <br /><br />
            <label>Review:</label><br />
            {/* <textarea type="text" size="50" className="moviereviewbox" onChange={(event) => {
              setReview(event.target.value);
            }} /> */}
            <div className="writtenReview">{review}</div>
            <br /><br />
            <label>Rating:</label><br />
            <Rating
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
            <button className="button-test" onClick={getMovies}>getMovies</button>
          </div>
        </div>
      </div>
    </b>
    </div>
  );
}
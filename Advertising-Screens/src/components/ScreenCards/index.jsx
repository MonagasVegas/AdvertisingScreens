import React from "react";
import "./index.css";
import SearchBar from "../Search";
import image from "../../assets/images/image.png";

const array = [
  {
    Title: "Avatar",
    Language: "English, Spanish",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
  {
    Title: "I Am Legend",
    Language: "English",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
  },
  {
    Title: "300",
    Language: "English",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
  },
  {
    Title: "300",
    Language: "English",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
  },
  {
    Title: "300",
    Language: "English",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
  },
  {
    Title: "Avatar",
    Language: "English, Spanish",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
  {
    Title: "I Am Legend",
    Language: "English",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
  },
  {
    Title: "300",
    Language: "English",
    Images:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
  },
  {
    "Title": "Power",
    "Language": "English",
    "Images": 
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
  },
  {
    "Title": "Narcos",
    "Language": "English, Spanish",
    "Images": 
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
  {
    "Title": "Breaking Bad",
    "Language": "English, Spanish",
    "Images": 
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
  },
  {
    "Title": "Doctor Strange",
    "Language": "English",
    "Images": 
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
      
  },
  {
    "Title": "Rogue One: A Star Wars Story",
    "Language": "English",
    "Images": 
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
  },
  {
    "Title": "Assassin's Creed",
    "Language": "English",
    "Images": 
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
      
  },
  {
    "Title": "Luke Cage",
    "Language": "English",
    "Images": 
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
  }
];

const ScreenCards = () => {
  return (
    <div >
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <SearchBar placeholder="Buscar" />
      </div>

      <div className="grid">
        {array.map((data) => (
          <div 
          key={data.id} 
          className="container-card"
          >
            <div style={{ justifyContent: 'center',  display: 'flex'}}>
              <img className="imga" src={data.Images || image} alt="" />
            </div>

            <div className="box">
              <div className="content">
                <span className="text-color" >Título:</span>
                <span className="text-color">
                  {data.Title}
                </span>
              </div>
              <div className="content">
                <span  className="text-color">Idioma:</span>
                <span className="text-color"  >{data.Language}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenCards;

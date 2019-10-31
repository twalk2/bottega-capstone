import React from "react";
import ReactModal from "react-modal";

import axios from "axios";

const Review = props => {
  const [resort, setResort] = React.useState({ resort: "Alta" });
  const [rating, setRating] = React.useState({ rating: "1 star" });
  const [name, setName] = React.useState({ name: "" });
  const [comment, setComment] = React.useState({ comment: "" });

  const [customStyles] = React.useState({
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "800px",
      zIndex: 9999
    },
    overlay: {
      backgroundColor: "rgba(1, 1, 1, 0.75)"
    }
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://creepy-chupacabra-73720.herokuapp.com/review", {
        resort: resort,
        rating: rating,
        name: name,
        comment: comment
      })
      .then(response => {
        console.log("response", response);
        props.closeModal();
        // setResort("Alta");
        // setRating("1 star");
        // setName("");
        // setComment("");
      })
      .catch(error => console.log("error", error));
  };

  return (
    <ReactModal
      style={customStyles}
      onRequestClose={() => props.closeModal()}
      isOpen={props.modalOpen}
    >
      <div className="review-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <div className="selectors">
            <select
              onChange={event => setResort(event.target.value)}
              name="resort"
            >
              <option value="Alta">Alta</option>
              <option value="Brighton">Brighton</option>
              <option value="Deer Valley">Deer Valley</option>
              <option value="Park City">Park City</option>
              <option value="Powder Mountain">Powder Mountain</option>
              <option value="Snowbasin">Snowbasin</option>
              <option value="Snowbird">Snowbird</option>
              <option value="Solitude">Solitude</option>
            </select>
            <select
              onChange={event => setRating(event.target.value)}
              name="rating"
            >
              <option value="1 star">1 star</option>
              <option value="2 stars">2 stars</option>
              <option value="3 stars">3 stars</option>
              <option value="4 stars">4 stars</option>
              <option value="5 stars">5 stars</option>
            </select>
          </div>
          <div>
            <input
              className="name"
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={event => setName(event.target.value)}
              required
            />
          </div>
          <div>
            <textarea
              className="comment"
              name="comment"
              type="text"
              placeholder="Leave Review Here"
              onChange={event => setComment(event.target.value)}
              required
            />
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export default Review;

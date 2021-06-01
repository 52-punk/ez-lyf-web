import { useRef } from "react";

import AddRoomIcon from "./AddRoomIcon";
import "./AddRoomForm.css";

function AddRoomForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descriptionInputRef.current.value;

    const roomData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDesc,
    };

    props.addRoom(roomData);

    console.log(roomData);
  }

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="title-container">
          <label htmlFor="title">Title</label>

          <input
            type="text"
            required
            id="title"
            placeholder="PG or Rent"
            ref={titleInputRef}
          />
        </div>
        <div className="image-container">
          <label htmlFor="image">Image</label>
          <input
            type="url"
            required
            id="image"
            placeholder="imageurl of the image"
            ref={imageInputRef}
          />
        </div>
        <div className="address-container">
          <label htmlFor="address">Address</label>
          <input
            type="textarea"
            required
            id="address"
            placeholder="Enter the address"
            ref={addressInputRef}
          />
        </div>
        <div className="description-container">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            placeholder="Description of the room"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="add-room-container">
          <button>Add Room</button>
        </div>
      </form>
    </div>
  );
}

export default AddRoomForm;

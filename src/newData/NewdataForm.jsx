import { React, useState } from "react";
import "./NewdataForm.css";
const NewdataForm = (props) => {
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [imgLink, setImgLink] = useState("");

  const newNameHandler = (event) => {
    setNewName(event.target.value);
  };

  const newPriceHandler = (event) => {
    setNewPrice(event.target.value);
  };

  const imgLinkHandler = (event) => {
    setImgLink(event.target.value);
  };

  const submitHandler = () => {
    const data = {
      name: newName,
      price: +newPrice,
      imgLink: imgLink,
      id: Math.random().toString(),
    };

    console.log(data);
    // accessing the props(onsave function declared in newexpense)
    props.getData(data);
    // empty the input fields after submission
    setNewName("");
    setNewPrice("");
    setImgLink("");
  };

  return (
    <div className="input_form">
      <input
        className="input"
        type="text"
        placeholder="Coin Name"
        value={newName}
        onChange={newNameHandler}
      />
      <input
        className="inputPrice"
        type="text"
        placeholder="Coin Price"
        value={newPrice}
        onChange={newPriceHandler}
      />
      <input
        className="imgLink"
        type="text"
        placeholder="Coin image link"
        value={imgLink}
        onChange={imgLinkHandler}
      />

      <button className="submit" onClick={submitHandler}>
        Add
      </button>
      <button className="close" onClick={props.close}>
        Close
      </button>
    </div>
  );
};

export default NewdataForm;

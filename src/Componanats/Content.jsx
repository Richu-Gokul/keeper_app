import "./Style.css";
import React, { useState } from "react";
import InputField from "./InputFeild";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Content = () => {
  const [newText, setNewText] = useState([]);

  function submitNote(text) {
    setNewText((preVal) => {
      return [...preVal, text];
    });
  }

  function removeItem(id) {
    const newItem = newText.filter((v, ind) => id !== ind);
    setNewText(newItem);
  }

  return (
    <div className="container mb-3 content-container">
      <InputField submitNote={submitNote} />
      <div className="row">
        {newText.map((val, ind) => (
          <div className=" col-auto mb-3 " key={ind}>
            <div className="card text-centeZ rounded-3 shadow-lg py-3">
              <h5 className="card-title px-3  ">{val.title}</h5>
              <div className="card-body   p-2">
                <p className="card- text"> {val.content}</p>
              </div>
              <div className="text-center">
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => removeItem(ind)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Content;

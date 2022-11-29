import React, { useState } from "react";
import AddIcon from "@mui/icons-material/AddSharp";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const InputField = (props) => {
  const [text, setText] = useState({
    title: "",
    content: "",
  });

  // get the value from input field

  function handleText(event) {
    const { name, value } = event.target;

    setText((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  // add item to the content

  function addItem() {
    props.submitNote(text);
    setText("");
  }

  const [expand, setExpand] = useState(false);

  function handleExpand() {
    expand === false ? setExpand(true) : setExpand(false);
  }

  return (
    <div className="row">
      <div className="col-lg-6 col-8  bg-white mx-auto py-3 mb-3 d-flex flex-column border border-2 rounded shadow">
        <label htmlFor="">Title</label>
        <input
          type="text"
          className="title py-2  mb-2"
          name="title"
          value={text.title || " "}
          onChange={handleText}
          onClick={handleExpand}
        />
        {expand === true ? (
          <>
            <label htmlFor="">Content</label>
            <textarea
              name="content"
              value={text.content || " "}
              id="content"
              className="py-2"
              rows="4"
              onChange={handleText}
            ></textarea>

            <div className="text-end px-4">
              <Zoom
                in={expand === true ? true : false}
                onClick={addItem}
                style={{ transitionDelay: "250ms" }}
              >
                <Fab id="btn" sx={{ backgroundColor: "gold" }} size="medium">
                  <AddIcon className="text-light" />
                </Fab>
              </Zoom>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default InputField;

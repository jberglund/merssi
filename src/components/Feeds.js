import React, { useState } from "react";
import * as Form from "./Forms";

const Feeds = ({ list }) => {
  const [toggled, setToggled] = useState(true);

  function handleClick() {
    setToggled(!toggled);
  }

  return (
    <div className="rss-feeds" data-toggled={toggled}>
      <button className="rss-feeds__toggle" onClick={() => handleClick()}>
        Edit feeds
      </button>
      <div className="form">
        <Form.FormGroup>
          <Form.FormGroupHeading>
            <span className="deemphasis">
              Young adventurer, please, feel free to add some feeds 🧙‍♂️
            </span>
          </Form.FormGroupHeading>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.RadioInput
            name="Pre-defined options!"
            choices={list}
            valueKey="url"
            labelKey="title"
            checkedKey="checked"
            type="checkbox"
          />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Input label="Name" />
          {/* <label className="form">
            <div className="form__label">Add your own</div>
            <input type="text" name="add" id="" />
          </label> */}
        </Form.FormGroup>
      </div>
    </div>
  );
};

export default Feeds;

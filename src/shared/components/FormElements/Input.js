import React, { useReducer,useEffect } from "react";

import { validate } from "../util/validators";

import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }

    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  const {id,onInput} = props;
  const {value,isValid } = inputState

  useEffect(() => {
    props.onInput(id,value,isValid);
  },[id,value,isValid,onInput])

// this makes the use effect function run when anything in the props changes or something in InputState changes.
  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control  ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

// we have third party libraries if we need to use this

//  useReducer is used when you have inter-connected state or complex states to deal with it
// in useReducer we pass the function and the initial state
// dispatch function is used to update our state and call the reducer with the given pararmeters

// the three dots are the spread operator they are used to update state obejcts. While updating the state it helps in copying the original data with new values
// the spread operator basicallly copies dat from the old state object into the new object where its being used


//useEffect is allowed to run a logic when a certain task has been completed
export default Input;

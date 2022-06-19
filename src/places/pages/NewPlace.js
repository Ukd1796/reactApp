import React from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/util/validators";
import "./PlaceForm.css";
import Button from "../../shared/components/FormElements/Button";

import { useForm } from "../../shared/components/hooks/form-hook";



const NewPlace = () => {

  const [formState,inputHandler] =useForm({
    title:{
      value:'',
      isValid:false
    },
    description:{
      value:'',
      isValid:false
    },
    address:{
      value:'',
      isValid:false
    },
  },false)





  const placeSubmitHandler = (event) => {
    event.preventDefault();
    // this is use to prevent a reload or refresh of the browser before button submission
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Description"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="textarea"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Add Place
      </Button>
    </form>
  );
};

export default NewPlace;

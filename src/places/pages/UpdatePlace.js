import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";

import "./PlaceForm.css";

import Card from "../../shared/components/UIElements/Card";

import Button from "../../shared/components/FormElements/Button";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/util/validators";

import { useForm } from "../../shared/components/hooks/form-hook";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Wankhade Stadium",
    description: "International Cricket ground in Mumbai",
    imageUrl:
      "https://th.bing.com/th/id/OIP.LxjGjG2rxM0rddk9zgvU_AHaD4?pid=ImgDet&rs=1",
    address: "D Rd, Churchgate, Mumbai, MH 400020, India",
    coordinates: {
      lat: 18.9388526,
      long: 72.8170092,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Wankhade Stadium",
    description: "International Cricket ground in Mumbai",
    imageUrl:
      "https://th.bing.com/th/id/OIP.LxjGjG2rxM0rddk9zgvU_AHaD4?pid=ImgDet&rs=1",
    address: "D Rd, Churchgate, Mumbai, MH 400020, India",
    coordinates: {
      lat: 18.9388526,
      long: 72.8170092,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const [isLoading,setIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
  });

  // we use this to save ourselves from the loading
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if(identifiedPlace)
    {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );

    }
 
    setIsLoading(false);
  },[setFormData,identifiedPlace]);

  const updateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
       <Card>
        <h2>Could not find a place!!</h2>
        </Card>
      </div>
    );
  }

  if(isLoading){
    return(
      <div className="center">
        <h2>loading....</h2>
      </div>
    )
  }
  return (  
    formState.inputs.title.value && <form className="place-form" onSubmit={updateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />

      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;

// custom hooks are use to share logic between two components instead of copying the same code again
// custom hooks are not allowed to be called inside of

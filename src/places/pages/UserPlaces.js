import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

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

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

// useParams allows us to gain value from the dynamic url and returns id and other info in the form of the object as and when needed

export default UserPlaces;

import { useState } from "react";
import { AnimalsHappy } from "./AnimalsHappy";
import { FavouriteAnimal } from "./FavouriteAnimal";
import { FavouriteDisneyAnimal } from "./FavouriteDisneyAnimal"

// Component: MultiStepForm
export const MultiStepForm = () => {
  // State to store form data for each field (name, age, email, favorite band, album, artist)
  const [formData, setFormData] = useState({

    FavouriteAnimal: "",
    AnimalsHappy: "",
    favoriteArtist: "",
  });

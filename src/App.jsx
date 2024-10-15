import { AnimalsHappy } from "./components/AnimalsHappy.jsx"
import { FavouriteAnimal } from "./components/FavouriteAnimal.jsx"
import { FavouriteDisneyAnimal } from "./components/FavouriteDisneyAnimal.jsx"

export const App = () => {
  return (
    <>
      <AnimalsHappy />
      <FavouriteAnimal />
      <FavouriteDisneyAnimal />
    </>
  );
};
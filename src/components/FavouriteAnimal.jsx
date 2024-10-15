// Whats your favourite animal - text box

import { useState } from "react"
export const FavouriteAnimal = () => {
  const [favouriteAnimal, setFavouriteAnimal] = useState("")

  return (
    <div className="border-box">
      <p>Favorite Animal:</p>
      <input
        type="text"
        onChange={(event) => setFavouriteAnimal(event.target.value)}
        value={favouriteAnimal}
      />
    </div>
  );
};
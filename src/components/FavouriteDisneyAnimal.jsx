//Whats your favourite Disney-animal? - dropdown menu 
//"Select"
// Lejonkungen - simba
// Lady and the tramp - Lady 
// Finding nemo - clown-fish 
// Aristocats - kitten
// Mickey mouse - mouse
// Chip n' Dale - chipmunks 


import { useState } from "react"
export const FavouriteDisneyAnimal = () => {
  const [favourite, setFavourite] = useState("")

  return (
    <div>
      <p>Favorite Disney Animal:</p>
      <form>
        <select
          onChange={event => setFavourite(event.target.value)}
          value={favourite}
        >
          <option value="">Select a Disney Animal</option>
          <option value="simba">Simba-Lion in The Lion King</option>
          <option value="lady-tramp">Lady and the Tramp-Dogs</option>
          <option value="nemo">Nemo-Clownfish in Finding Nemo</option>
          <option value="aristocats">Thomas O' Malley-Cat in Aristocats</option>
          <option value="mickey">Mickey Mouse- Famous Disney Mouse</option>
          <option value="chip-dale">Chip 'n' Dale - Chipmunks </option>
        </select>
      </form>
    </div>
  )
};


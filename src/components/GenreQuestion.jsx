// Whats your favourite music genre? - dropdown menu 3
import { useState } from "react"

export const GenreQuestion = () => {
  const [genre, setGenre] = useState("");

  return (
    <div>
      <div className="question-container">
        <h1>3</h1>
        <p>Whats your favourite music genre?</p>
      </div>
      <div className="answer-container">
        <form>
          <select
            onChange={event => setGenre(event.target.value)}
            value={genre}
          >
            <option value="">Select genre</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="House">House</option>
            <option value="R&B">R&B</option>
            <option value="Indie">Indie</option>
          </select>
        </form>
      </div>

    </div>
  );
};
import { MoodQuestion } from "./components/MoodQuestion.jsx"
import { MusicHappyQuestion } from "./components/MusicHappyQuestion.jsx";
import { GenreQuestion } from "./components/GenreQuestion.jsx";

export const App = () => {
  return (
    <>
      <MoodQuestion />
      <MusicHappyQuestion />
      <GenreQuestion />
    </>
  );
};

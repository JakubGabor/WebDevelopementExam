import QuizGame from "../components/quiz/QuizGame";

const HomePage = () => {
  return (
    <section className="d-flex flex-column">
      <h3 className="text-center my-4">F1 Quiz</h3>
      <QuizGame />
    </section>
  );
};

export default HomePage;

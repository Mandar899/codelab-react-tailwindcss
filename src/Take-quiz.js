import background from "./assets/bgScreen.png";

const TakeQuiz = () => {
  return (
    <section
      className="text-left p-32"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="font-inter font-bold md:text-4xl text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-900">
        Not sure where to begin?
      </h1>
      <p className="font-inter font-bold text-gray-700 text-lg mb-5">
        No need to worry, we’ll help you make sense of it all.
      </p>
      <div>
        <button className="px-8 py-4 font-inter font-semibold bg-yellow-400 hover:bg-yellow-300 text-gray-800 hover:text-gray-700 rounded-xl hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-900">
          Take Quiz
        </button>
      </div>
    </section>
  );
};

export default TakeQuiz;

const ShadowCard = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20 bg-gradient-to-tr from-blue-100 to-purple-400 overflow-hidden">
      <div className="mb-10">
        <h1 className="text-4xl font-inter font-semibold text-blue-900">
          Tell us why you want to learn to code We’ll show you what to learn
        </h1>
      </div>
      <div className=" flex-cols-3 md:flex gap-5 lg:gap-32 text-left ml-2 mr-2">
        <div className="bg-gradient-to-r from-blue-200 to-blue-500 w-64 space-y-4 p-4  rounded-2xl  hover:shadow-2xl shadow-md mb-5">
          {/* line  */}
          <div className="h-2 w-20 bg-blue-800"></div>
          {/* heading  */}
          <div className="font-inter text-xl font-extrabold text-blue-900">
            Web Development
          </div>

          {/* description  */}
          <p className="font-inter">
            Master the languages of the web: HTML, CSS, and JavaScript. This
            path will prepare you to build basic websites and then build
            interactive web apps.
          </p>
          {/* learn more  */}
          <a href="#" className="block font-inter font-bold underline">
            Learn More!
          </a>
        </div>
        <div className="bg-gradient-to-r from-blue-200 to-blue-500 w-64 space-y-4 p-4 rounded-2xl  hover:shadow-2xl shadow-md mb-5">
          {/* line  */}
          <div className="h-2 w-20 bg-blue-800"></div>
          {/* heading  */}
          <div className="font-inter text-xl font-extrabold text-blue-900">
            Programming and Computer Science
          </div>

          {/* description  */}
          <p className="font-inter">
            Learn Python fundamentals, one of the hottest and fastest growing
            programming languages. This is a great introduction to the world of
            code.
          </p>
          {/* learn more  */}
          <a href="#" className="block font-inter font-bold underline">
            Learn More!
          </a>
        </div>
        <div className="bg-gradient-to-r from-blue-200 to-blue-500 w-64 space-y-4 p-4 rounded-2xl  hover:shadow-2xl shadow-md mb-5">
          {/* line  */}
          <div className="h-2 w-20 bg-blue-800"></div>
          {/* heading  */}
          <div className="font-inter text-xl font-extrabold text-blue-900">
            Data Science
          </div>

          {/* description  */}
          <p className="font-inter">
            Learn SQL and Python and build the skills you need to analyze data.
            Great for anyone trying to use code to be more data-driven.
          </p>
          {/* learn more  */}
          <a href="#" className="block font-inter font-bold underline">
            Learn More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShadowCard;

const HeroSection = () => {
  return (
    <div className="">
      <section className="bg-gradient-to-r from-blue-100 to-blue-600 p-32 text-center">
        <h1 className="font-inter font-bold  md:text-5xl text-2xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-900">
          Join the Millions Learning to Code with CodeLab
        </h1>
        <p className="font-inter font-bold text-gray-700 md:text-lg text-sm mb-12">
          Use codelab to learn by practicing on the go, and take help from
          people along the way.
        </p>

        <div className="space-x-4 hidden md:flex justify-center">
          <a
            href="#"
            className="px-8 py-4 font-inter font-semibold bg-blue-700 text-blue-100 rounded-md hover:bg-blue-200 hover:text-blue-900 hover:shadow-xl transition duration-300 "
          >
            Sign Up
          </a>
          <a
            href="#"
            className="px-8 py-4 font-inter font-semibold bg-yellow-300 text-yellow-700 rounded-md hover:bg-yellow-200 hover:text-blue-900 hover:shadow-xl transition duration-300"
          >
            Explore Languages
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

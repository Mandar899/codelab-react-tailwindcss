const ProPricing = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-tl from-blue-400 to-blue-100 ">
      <div className="p-32 bg-gradient-to-tl from-blue-200 to-blue-500 m-10 text-center space-y-3 rounded-lg shadow">
        <h1 className="font-inter font-extrabold text-4xl text-blue-900">
          Unlock full access
        </h1>
        <p className="font-inter text-lg text-gray-800">
          CodeLab membership gives you unlimited access to all content in this
          learning path, and on the whole site.
        </p>
        <button className="px-3 py-2 lg:mr-3 bg-blue-900 text-blue-100 hover:bg-blue-100 hover:text-blue-900 font-inter font-bold rounded-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-900 ">
          Subscribe @ ₹1016/month
        </button>
        <button className="px-3 py-2 bg-yellow-300 text-yellow-900 hover:bg-yellow-200 hover:text-gray-800 font-inter font-bold rounded-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-900 ">
          Subscribe @ ₹899/month for full-year
        </button>
        <p className="font-inter font-bold">OR</p>
        <a
          href="#"
          className="font-inter font-medium underline hover:text-blue-600"
        >
          View all plans
        </a>
      </div>
    </div>
  );
};

export default ProPricing;

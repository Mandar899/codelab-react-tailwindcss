const Footer = () => {
  return (
    <footer className="text-center bg-gradient-to-r from-gray-700 to-gray-900 ">
      <div className="md:flex hidden items-center justify-center gap-6 p-5">
        <div className="w-40 h-40  text-left space-y-2">
          <h1 className="font-inter font-bold text-2xl text-blue-300">
            CodeLab
          </h1>
          <div className="flex flex-col">
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Blog
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Discord Server
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              YouTube Channel
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Android App
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              iOS App
            </a>
          </div>
        </div>
        <div className="w-40 h-40 text-left space-y-2">
          <h1 className="font-inter font-bold text-2xl text-blue-300">
            Products
          </h1>
          <div className="flex flex-col">
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Learning Paths
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Video Courses
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Classrooms
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Enterprise Solutions
            </a>
          </div>
        </div>
        <div className="w-40 h-40 text-left space-y-2">
          <h1 className="font-inter font-bold text-2xl text-blue-300">
            Company
          </h1>
          <div className="flex flex-col">
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              About
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Privacy Policy
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Contact Us
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Campus Ambassador Program
            </a>
          </div>
        </div>
        <div className="w-40 h-40 text-left space-y-2">
          <h1 className="font-inter font-bold text-2xl text-blue-300">
            Social
          </h1>
          <div className="flex flex-col">
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Instagram
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Twitter
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              Facebook
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              GitHub
            </a>
            <a href="#" className="font-inter font-bold text-sm text-gray-500">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-blue-300">
        <hr />
      </div>
      <div className="flex flex-row justify-around">
        <h1 className="font-inter font-normal text-sm text-gray-300">
          Made with 💖 by{" "}
          <a
            href="https://github.com/Mandar899"
            target="_blank"
            className="text-gray-400"
          >
            @Mandar899
          </a>{" "}
        </h1>
        <h1 className="font-inter font-normal text-sm text-gray-300">
          Copyright © CodeLab | All Rights Reserved.{" "}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

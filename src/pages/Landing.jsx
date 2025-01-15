import { Link } from "react-router-dom";
import Header from "./Header";
import bot from "../assets/icons/bot.svg";
import doc from "../assets/icons/doc.svg";
import glass from "../assets/icons/glass.svg";
import sparkel from "../assets/icons/sparkel.svg";

const Landing = () => {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <section className="flex flex-col justify-center items-center py-10 text-center">
        <div className="container mx-auto max-w-3xl">
          <div className="text-2xl sm:text-4xl md:text-6xl px-2 font-bold mb-6">
            Elevate Your Code with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Insights
          </div>
          <p className="text-sm sm:text-xl mb-8 font-medium px-5 text-gray-500">
            Get instant feedback, smart suggestions, and learn best practices to
            improve your coding skills. Perfect for developers and students
            alike.
          </p>
        </div>
        <Link
          to="/analyze"
          className="p-2 text-white text-[14px] font-medium bg-slate-600 rounded hover:bg-slate-700"
        >
          Get Code Review
        </Link>
      </section>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 md:mx-20 lg:mx-72">
        <div className="px-7 py-4 m-3 rounded bg-[#1A3636]">
          <pre>
            <code className="text-teal-500">{`// Paste your code here
function example() {
    // Your code
}`}</code>
          </pre>
        </div>
        <div className="px-7 py-4 m-3 flex gap-1 flex-col rounded bg-[#577B8D]">
          <div className="flex gap-2 items-center ">
            <img src={bot} className="h-6" />
            <div className="text-white">AI Suggestion:</div>
          </div>
          <div className="">
            <div className="flex gap-2 items-center ">
              <img src={sparkel} className="h-5" />
              <div className="text-white">Consider adding type checking</div>
            </div>
            <div className="flex gap-2 items-center ">
              <img src={glass} className="h-5" />
              <div className="text-white">
                Add error handling for undefined data
              </div>
            </div>
            <div className="flex gap-2 items-center ">
              <img src={doc} className="h-5" />
              <div className="text-white">Document function parameters</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex justify-center items-center absolute inset-x-0 bottom-2">
        <div>
          Made by{" "}
          <Link
            to="https://samyaksukhdeve.dev/"
            target="_blank"
            className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-500 bg-clip-text text-transparent"
          >
            samyaksukhdeve.dev
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

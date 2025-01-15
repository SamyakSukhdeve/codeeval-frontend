import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <div className="container p-4">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-primary">
          CodeEval AI
        </Link>
      </div>
    </header>
  );
};

export default Header;

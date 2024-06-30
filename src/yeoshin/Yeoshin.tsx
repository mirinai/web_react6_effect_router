import { CSSProperties } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { MagnifyingGlass } from "@heroicons/react/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const Yeoshin = () => {
  return (
    <>
      <header className="flex flex-row w-full items-center fixed top-0 z-99 bg-white ">
        <div className="flex flex-row space-x-72 w-full h-54 items-center bg-white">
          <div className="flex flex-row justify-between ">
            <button>!</button>
            <p>dfasf</p>
          </div>
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </header>
    </>
  );
};
export default Yeoshin;

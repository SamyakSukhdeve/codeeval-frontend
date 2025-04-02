import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useReviewStore } from "../store/reviewStore";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
const Editor = () => {
  const { getReview, isLoading } = useReviewStore();
  const [userCode, setUserCode] = useState(``);

  const handleSubmit = async () => {
    try {
      await getReview(userCode);
      const element = document.getElementById("markdown");
      element?.scrollIntoView({
        behavior: "smooth",
      });
    } catch (e) {
      toast.error(e.response?.data.message);
    }
  };

  return (
    <div className="h-svh md:w-1/2 relative overflow-scroll">
      <button
        onClick={handleSubmit}
        disabled={isLoading ? true : false}
        className="w-max bottom-6 right-6 absolute  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-[14px]  rounded z-10 p-[7px] active:translate-y-1 disabled:pointer-events-none disabled:cursor-not-allowed"
      >
        {isLoading ? "Analyzing..." : "Analyze Code"}
      </button>
      <CodeMirror
        height="100svh"
        value={userCode}
        onChange={setUserCode}
        extensions={[javascript({ jsx: true })]}
        theme="dark"
        style={{
          fontSize: "15px",
        }}
      ></CodeMirror>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Editor;

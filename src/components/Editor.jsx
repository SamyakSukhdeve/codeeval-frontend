import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useReviewStore } from "../store/reviewStore";
import { useState } from "react";

const Editor = () => {
  const { getReview, isLoading } = useReviewStore();
  const [userCode, setUserCode] = useState(`//Write code`);

  const handleSubmit = async () => {
    try {
      await getReview(userCode);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-1/2 relative">
      <button
        onClick={handleSubmit}
        disabled={isLoading ? true : false}
        className="w-max bottom-6 right-6 absolute bg-[#898121]  hover:bg-[#4C4B16] text-white  rounded z-10 p-[6px] active:translate-y-1 disabled:pointer-events-none disabled:cursor-not-allowed"
      >
        Generate Review
      </button>
      <CodeMirror
        height="100vh"
        value={userCode}
        onChange={setUserCode}
        extensions={[javascript({ jsx: true })]}
        theme="dark"
        style={{
          fontSize: "15px",
        }}
      ></CodeMirror>
    </div>
  );
};

export default Editor;

import MarkdownPreview from "@uiw/react-markdown-preview";
import { useReviewStore } from "../store/reviewStore";

import arrow from "../assets/icons/arrow.svg";

const MakrdownView = () => {
  const { markdownResponse, isLoading } = useReviewStore();

  return (
    <div className="h-svh md:w-1/2 w-screen" id="markdown">
      {isLoading ? (
        <div className="flex justify-center flex-col items-center h-screen ">
          <img
            src={arrow}
            className={`h-8 a ${isLoading ? "animate-spin" : ""}`}
          ></img>
          <strong>Analyzing...</strong>
        </div>
      ) : (
        <MarkdownPreview
          source={markdownResponse}
          style={{
            padding: 20,
            height: "100svh",
            overflowY: "scroll",
          }}
        />
      )}
    </div>
  );
};

export default MakrdownView;

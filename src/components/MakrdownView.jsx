import MarkdownPreview from "@uiw/react-markdown-preview";
import { useReviewStore } from "../store/reviewStore";

const MakrdownView = () => {
  const { markdownResponse, isLoading } = useReviewStore();

  return (
    <div className="h-screen w-1/2">
      {isLoading ? (
        <div className="flex justify-center flex-col items-center h-screen ">
          <img
            src="/src/assets/icons/arrow-path.svg"
            className={`h-8 a ${isLoading ? "animate-spin" : ""}`}
          ></img>
          <strong>Analyzing...</strong>
        </div>
      ) : (
        <MarkdownPreview
          source={markdownResponse}
          style={{
            padding: 20,
            height: "100vh",
            overflowY: "scroll",
          }}
        />
      )}
    </div>
  );
};

export default MakrdownView;

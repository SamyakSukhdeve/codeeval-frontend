import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
const Editor = () => {
  return (
    <div className="h-screen w-1/2 relative">
      <button className="w-max bottom-3 right-3 absolute bg-gray-500  hover:bg-gray-700 text-white rounded z-10 p-2 active:translate-y-1 disabled:pointer-events-none disabled:cursor-not-allowed">
        Generate Review
      </button>
      <CodeMirror
        minHeight="100vh"
        value="samyak sukhdeve"
        onChange={() => {}}
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

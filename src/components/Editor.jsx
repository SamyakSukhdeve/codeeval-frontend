import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
const Editor = () => {
  return (
    <div className="h-screen w-1/2">
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

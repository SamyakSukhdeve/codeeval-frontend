import Editor from "./components/Editor";
import MakrdownView from "./components/MakrdownView";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center relative overflow-hidden">
      <Editor />
      <MakrdownView></MakrdownView>
    </div>
  );
}

export default App;

import Editor from "./components/Editor";
import MakrdownView from "./components/MakrdownView";

function App() {
  return (
    <div className="min-h-svh w-screen md:flex md:justify-center md:items-center relative overflow-hidden grid grid-row-2">
      <Editor />
      <MakrdownView />
    </div>
  );
}

export default App;

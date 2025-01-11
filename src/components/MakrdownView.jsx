import MarkdownPreview from "@uiw/react-markdown-preview";

const MakrdownView = () => {
  const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;
  return (
    <div className="h-screen w-1/2 bg-white">
      <MarkdownPreview
        source={source}
        style={{ padding: 20, height: "100vh" }}
      />
    </div>
  );
};

export default MakrdownView;

import React, { useEffect, useState } from "react";
import Asciidoc from 'react-asciidoc';

export default function App() {
  return (
    <div className="App">
      <PageComponent />
    </div>
  );
}

const PageComponent = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("releaseNotes.adoc")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="post">
      {/* <ReactMarkdown children={content} /> */}
      <Asciidoc options={{ doctype: "book" }}  children={content} />)
    </div>
  );
};

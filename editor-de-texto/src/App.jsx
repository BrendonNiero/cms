import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import "./App.css"

export default function App(){

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: 40,
  }

  const handleUpdate = (e) => {
    const editorContent = e.target.value;
  }

  return(
    <div className="App">
      <JoditEditor ref={editor} value={content} config={config} 
      onBlur={handleUpdate} onChange={(newcontent) => {}}/>
    </div>
  )
}
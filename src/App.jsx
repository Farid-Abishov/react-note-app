import { useState } from "react";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";
import { nanoid } from "@reduxjs/toolkit";
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "02.06.2024",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "03.06.2024",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "04.06.2024",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const[mode,setMode]=useState(false);

  function addNote(sasa) {
    const newNote = {
      id: nanoid(),
      text: sasa,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function handleSearchItem(event) {
    setSearchText(event.target.value);
  }
function handleChange(){
  setMode(!mode)
}

  return (
    <div  className={ ` container ${mode?'dark-mode':''}`}>
      {/* `container ${mode}?'dark-mode':'null'` */}
      <Header changeMode={handleChange}  />
      <Search handleSearchNote={handleSearchItem} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;

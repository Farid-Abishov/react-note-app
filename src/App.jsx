import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";
import { nanoid } from "@reduxjs/toolkit";
function App() {
  const [notes, setNotes] = useState(()=>{
    const savedNotes=localStorage.getItem('react-notes-app')

    if(savedNotes){
      return JSON.parse(savedNotes)
    }
    else{
      return [
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
      ]
    }
  });

  const [searchText, setSearchText] = useState("");
  const[mode,setMode]=useState(false);

 

  function addNote(sasa) {
    const newNote = {
      id: nanoid(),
      text: sasa,
    };
   
    const newNotes = [...notes, newNote];
    if(newNote.text.trim()===''){
      return notes
    }else{
      setNotes(newNotes);
    }
    
  }
 
  useEffect(()=>{
    localStorage.setItem('react-notes-app',JSON.stringify(notes))
  },[notes])
  
  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function handleSearchItem(event) {
    setSearchText(event.target.value);
  }

function handleChange(){
  setMode(!mode)
}

function filter(){
 return  notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()))
}

let filteredList=filter();

  return (
    <div  className={ ` container ${mode?'dark-mode':''}`}>
      <Header changeMode={handleChange}  />
      <Search handleSearchNote={handleSearchItem} />
      <NoteList
       notes={filteredList}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}


export default App;

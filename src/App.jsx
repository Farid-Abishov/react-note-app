import { useState } from "react"
import NoteList from "./components/NoteList"
import { nanoid } from "@reduxjs/toolkit";
function App() {
  const[notes,setNotes]=useState([
    {
      id:nanoid(),
      text:'This is my first note',
      date:'02.06.2024'
    },
    {
      id:nanoid(),
      text:'This is my second note',
      date:'03.06.2024'
    },
    {
      id:nanoid(),
      text:'This is my third note',
      date:'04.06.2024'
    },
  ])
  function addNote(sasa){
    const newNote={
      id:nanoid(),
      text:sasa
    }
    const newNotes=[...notes,newNote]
    setNotes(newNotes)
  }
 
  function deleteNote(id){
    setNotes(notes.filter((note)=>note.id !==id))
  }
  return (
    <div className="container">
      <NoteList  notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  )
}

export default App

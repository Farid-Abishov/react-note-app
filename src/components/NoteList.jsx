import CreateNote from "./CreateNote.jsx";
import Note from "./Note.jsx";
export default function NoteList({notes,handleAddNote,handleDeleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note)=>(<Note  key={note.id} id={note.id}  handleDeleteNote={handleDeleteNote}  text={note.text} date={note.date}/>
    ))} 
      <CreateNote handleAddNote={handleAddNote} />
    </div>
  );
}

import { useState } from "react"

export default function CreateNote({handleAddNote}){
    const[noteText,setNoteText]=useState('')
    
    const characterLimit=200; 
    function handleChange(event){
        setNoteText(event.target.value);
    }
    
    function handleSave(){
        handleAddNote(noteText);
        setNoteText('');
    }

    return <div className="note new">
        <textarea  
        onChange={handleChange}
        value={noteText}
        className="textarea" 
        rows={4}  
        placeholder="type to add a note..."/>

        <div className="note-footer">
            <small>{characterLimit-noteText.length} remaining</small>
            <button  onClick={handleSave}  className="save">save</button>
        </div>
    </div>
}
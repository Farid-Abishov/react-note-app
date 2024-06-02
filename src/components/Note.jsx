import { MdDelete } from "react-icons/md";
export default function Note({id,text,date,handleDeleteNote}){
    return <div className="note ">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDelete size='1.5em' onClick={()=>handleDeleteNote(id)} className='delete-icon'/>
        </div>
    </div>
}
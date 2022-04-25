import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';




function CreateArea(props) {
    const [flag, setFlag] =useState(false);
    const [note, setNote] =useState({
        title: "", 
        content: ""
    });

function handleChange(event){
    const {name, value} = event.target;

    setNote(prev => {
        return {
            ...prev, 
            [name]:value
        }
    })

}
function submitNote(event){
    props.onAdd(note);
    setNote({
        title: "", 
        content: ""
    })

    event.preventDefault();
}
function exapnd(){
    setFlag(true);
}


  return (
    <div>
      <form className="create-note">
        {flag && <input name="title"  onChange={handleChange} value={note.title} placeholder="Title" />}
        <textarea name="content" onClick={exapnd} onChange={handleChange}value={note.content} placeholder="Take a note..." rows={flag?3:1} />
        <Zoom in={flag}>
            <Fab onClick={submitNote}>
                <AddIcon/>
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

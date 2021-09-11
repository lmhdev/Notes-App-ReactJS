import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const charLimit = 200;

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (noteText.trim().length > 0) {
      handleAddNote(noteTitle, noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <input
        type="text"
        placeholder="Add a title..."
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <textarea
        placeholder="Type to add a note..."
        cols="10"
        rows="8"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} Char Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;

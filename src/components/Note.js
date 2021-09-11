import React, { useState } from "react";
import { MdClose, MdDeleteForever, MdEdit, MdSave } from "react-icons/md";

const Note = ({ id, title, text, date, deleteNote, notes, setNotes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [titleEditValue, setTitleEditValue] = useState(title);
  const [textEditValue, setTextEditValue] = useState(text);
  const charLimit = 200;

  const handleEditChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setTextEditValue(e.target.value);
    }
  };

  const handleCancelClick = () => {
    setTitleEditValue(title);
    setTextEditValue(text);
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    const updatedNoteIndex = notes.findIndex((note) => note.id === id);

    const updatedNotes = [...notes];
    const date = new Date();

    updatedNotes[updatedNoteIndex].title = titleEditValue;
    updatedNotes[updatedNoteIndex].text = textEditValue;
    updatedNotes[updatedNoteIndex].date = date.toLocaleDateString();

    setNotes(updatedNotes);

    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div className="note edit">
          <input
            type="text"
            value={titleEditValue}
            onChange={(e) => setTitleEditValue(e.target.value)}
          />
          <textarea
            cols="10"
            rows="8"
            value={textEditValue}
            onChange={handleEditChange}
          ></textarea>
          <div className="note-footer">
            <MdSave size="1.2em" className="icon" onClick={handleSaveClick} />
            <small>{charLimit - textEditValue.length} Char Remaining</small>
            <MdClose
              size="1.2em"
              className="icon"
              onClick={handleCancelClick}
            />
          </div>
        </div>
      ) : (
        <div className="note">
          <div className="note-content">
            <span className="note-title">{title}</span>
            <span>{text}</span>
          </div>

          <div className="note-footer">
            <small>{date}</small>
            <div className="note-footer-icons">
              <MdEdit
                className="icon"
                size="1.2em"
                onClick={() => setIsEditing(true)}
              />
              <MdDeleteForever
                className="icon"
                size="1.3em"
                onClick={() => deleteNote(id)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Note;

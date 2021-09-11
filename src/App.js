import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${dark && "dark-mode"}`}>
      <div className="container">
        <Header setDark={setDark} />
        <Search handleSearch={setSearch} />
        <NotesList
          notes={
            search
              ? notes.filter((note) => note.text.toLowerCase().includes(search))
              : notes
          }
          handleAddNote={addNote}
          deleteNote={deleteNote}
          setNotes={setNotes}
        />
      </div>
    </div>
  );
}

export default App;

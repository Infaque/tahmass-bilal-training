import React from "react";
import ReactDOM from "react-dom";

import store from "./store/store";
import { Provider } from "react-redux";

import AddNoteForm from "./components/AddNoteForm";
import NoteList from "./components/NoteList";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="note-taking-app">
        <NoteList />
        <AddNoteForm />
      </div>
    </Provider>
  );
}
export default App;

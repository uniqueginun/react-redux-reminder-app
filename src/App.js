import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import RemindersList from "./components/RemindersList";
import AddReminderForm from "./components/AddReminderForm";

function App() {
  return (
    <div className="container">
      <NavBar />
      <AddReminderForm />
      <RemindersList />
    </div>
  );
}

export default App;

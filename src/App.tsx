import React from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import {VideoPlaylistPage} from "./pages/VideoPlaylistPage/VideoPlaylistPage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
        <MainPage />
        <VideoPlaylistPage />
      </div>
    </div>
  );
}

export default App;

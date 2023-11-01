import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../../components/Main/Main";

interface MainPageProps {
  className?: string;
}

export const MainPage = (props: MainPageProps) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

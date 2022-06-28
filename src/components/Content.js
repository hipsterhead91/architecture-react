import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import Designed from './Designed';
import Built from './Built';
import Project from './Project';
import Contacts from './Contacts';

function Content() {

  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="designed" element={<Designed />} />
        <Route path="built" element={<Built />} />
        <Route path="designed/:id/*" element={<Project />} />
        <Route path="built/:id/*" element={<Project />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </main>
  )
}

export default Content;
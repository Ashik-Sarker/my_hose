import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "../Login/Login";

const Guest = () => {
     return (
          <div>
               <Routes>
                    <Route path="/" element={<Login/>}></Route>
               </Routes>
          </div>
     );
};

export default Guest;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import DashBoard from "../DashBoard/DashBoard";
import AddLandLord from "../LandLord/AddLandLord";
import ManageLandlord from "../LandLord/ManageLandlord";
import ManageFamily from "../RentPerson/ManageFamily";
import AddFamily from "../RentPerson/AddFamily";
import Footer from "../Footer/Footer";



const Auth = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Sidebar></Sidebar>
               <Routes>
                    
                    <Route path="/dashboard" element={<DashBoard />}></Route>

                    {/* <Route path="dashboard" element={<DashBoard />}></Route> */}
                    <Route path="add-land-lord" element={<AddLandLord />}></Route>
                    <Route path="manage-landlord" element={<ManageLandlord />}></Route>
                    <Route path="family" element={<ManageFamily/>}></Route>
                    <Route path="add-family" element={<AddFamily/>}></Route>

               </Routes>
               <Footer></Footer>
          </div>
     );
};

export default Auth;
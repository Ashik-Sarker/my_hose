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
import ManageSublet from '../RentPerson/ManageSublet';
import AddSublet from '../RentPerson/AddSublet';
import ManageMes from '../RentPerson/ManageMes';
import AddMes from '../RentPerson/AddMes';



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
                    <Route path="sublet" element={<ManageSublet/>}></Route>
                    <Route path="add-sublet" element={<AddSublet/>}></Route>
                    <Route path="mes" element={<ManageMes/>}></Route>
                    <Route path="add-mes" element={<AddMes/>}></Route>

               </Routes>
               <Footer></Footer>
          </div>
     );
};

export default Auth;
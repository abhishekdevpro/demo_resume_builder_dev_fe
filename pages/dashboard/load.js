import Navbar from "../Navbar/Navbar";
import ProfileForm from "../profile";
import ProfilePage from "./Profile";
import Sidebar from "./Sidebar";


import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { FaBars } from 'react-icons/fa'; //
import Builder from "../builder";
import LoadUnload from "../../components/form/LoadUnload";

// export default function DashboardPage() {
export default function Load() {

   
    return (
        <div>
       <LoadUnload/>
       
        </div>
    );
}

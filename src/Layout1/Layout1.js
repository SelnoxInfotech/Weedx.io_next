// src/components/Layout1.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../Components/Component/Navbar/Navbar"
import Grid from '@mui/material/Grid';
import Footer from '@/Components/Component/Footer/Footer';
const Layout1 = () => {
  return (
    <div >
    <div className='sticky-top '>  <Navbar></Navbar>  </div>
    <div className='container ' id='layout'>
        <Grid item={true} xs={12} md={12} xl={12}>
            <Outlet />
        </Grid>
    </div>
    <Footer/>

</div>

  );
};

export default Layout1;

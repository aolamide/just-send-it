import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomBar from './BottomBar';

const Layout = () => {
    return (
        <div className="font-poppins">
            <div>
                <Outlet/>
            </div>
            <BottomBar/>
        </div>
    );
};

export default Layout;

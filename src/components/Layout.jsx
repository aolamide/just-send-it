import React, {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import BottomBar from './BottomBar';
import {useSelector} from "react-redux";

const Layout = () => {
    const token = useSelector((state) => state.user.token);
    const navigate = useNavigate();
    useEffect(() => {

        if(!token) {
            navigate('/start');
        }
    }, []);
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

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './layout/Home/Home';
import Admin from './layout/Admin/Admin';
import AdminProtect from './Utils/AdminProtected';
import PrivateRoute from './Utils/PrivateRoute';
import { useAuth } from './Utils/auth';
import UserAdmin from './layout/UserAdmin/UserAdmin';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import DeviceDetails from './Components/Admin/DeviceDetails/DeviceDetails';
// import NewDevice from './Components/Admin/NewDevice/NewDevice';

function App() {

    const { isLoggedIn, devices } = useAuth();
    
    

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} >

                    </Route>
                    <Route path='/admin/' element={
                        <PrivateRoute isLoggedIn={isLoggedIn} >
                            <Admin />
                        </PrivateRoute>
                    } >
                        <Route path='user' element={<UserAdmin />}>
                            <Route path='dashboard' element={<Dashboard />} />
                            <Route path='device-details' element={<DeviceDetails />} />
                            {/* <Route path='device-new' element={<NewDevice />} /> */}
                        </Route>
                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

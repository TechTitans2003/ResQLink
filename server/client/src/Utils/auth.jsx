import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const API = `https://resqlink.onrender.com`;

    // token state variable
    const [token, setToken] = useState(localStorage.getItem('token'));

    // user state variable
    const [user, setUser] = useState({});

    // devices state variable
    const [devices, setDevices] = useState([]);

    // insight state variable
    const [insight, setInsight] = useState({
        devices: 0,
        location: 0,
        "active-devices": 0,
    });

    // loading state variable
    const [isLoading, setIsLoading] = useState(true);

    // setting token in LS
    const setTokenInLS = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    }

    // handling logout
    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    // getting user data
    const getUser = async () => {
        const url = `${API}/api/auth/user/info`;

        try {
            setIsLoading(true);
            if (token !== null) {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                const resdata = await response.json();

                if (response.ok) {
                    const userData = await resdata.user;
                    // console.log(userData);
                    setUser(userData);
                    setIsLoading(false);
                }
                else {
                    setIsLoading(false);
                }
            }

        } catch (error) {
            console.log(`usr data error`, error);
        }

    }


    // getting device data
    const getUserDevice = async () => {
        const url = `${API}/api/auth/user/device`;

        try {
            if (token !== null) {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                const resdata = await response.json();
                // console.log(resdata);
                if (response.ok) {
                    const devices = await resdata.devices;
                    // console.log(userData);
                    setDevices(devices)
                }
            }

        } catch (error) {
            console.log(`device data error`, error);
        }

    }

    useEffect(() => {
        getUser();
    }, [token])


    useEffect(() => {
        if (token) {
            getUserDevice();
        }
    }, [user]);

    useEffect(() => {
        if (devices.length >= 0) {
            const activeDeviceCount = devices.filter(device => device.isActive).length;
            setInsight(prevInsight => ({
                ...prevInsight,
                devices: devices.length,
                location: devices.length,
                'active-devices': activeDeviceCount,
            }));
        }
        // console.log(insight);

    }, [devices]);

    useEffect(() => {
        const interval = setInterval(getUserDevice, 2000);
        return () => {clearInterval(interval)}
    }, [])

    let isLoggedIn = !!token;

    const contextContent = {
        API,
        token,
        isLoggedIn,
        user,
        insight,
        devices,
        getUserDevice,
        setTokenInLS,
        getUser,
        logoutUser,
    }

    return (
        <AuthContext.Provider value={contextContent}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    };
    return authContextValue;
}
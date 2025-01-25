import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('captain-token');

        axios.get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('captain-token');
                navigate('/captain-login');
            }
        })
        .catch((error) => {
            console.error('Error during logout:', error);
            // Optionally handle errors, like showing a message to the user.
            navigate('/captain-login'); // Redirect to login even if there's an error
        });
    }, [navigate]); // Adding `navigate` to the dependency array is recommended

    return (
        <div>Logging out...</div>
    );
};

export default CaptainLogout;

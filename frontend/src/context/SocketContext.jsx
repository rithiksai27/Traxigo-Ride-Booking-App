import { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

// ✅ Fix: Correctly reference `VITE_BASE_URL`
const socket = io(import.meta.env.VITE_BASE_URL);

const SocketProvider = ({ children }) => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });

    return () => {
      socket.disconnect();  // Cleanup on unmount
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;

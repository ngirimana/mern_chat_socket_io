import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ChatProvider from './context/ChatProvider';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ChatProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </ChatProvider>
);


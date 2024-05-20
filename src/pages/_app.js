// src/pages/_app.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import AppRoutes from '../Routes/ AppRoutes';
import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Context} from "../Hooks/Context"
function MyApp({ Component, pageProps, router }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <BrowserRouter>
      <Context>
        <AppRoutes />
      </Context>
      </BrowserRouter>
    );
  }

  return (
    <StaticRouter location={router.asPath}>
       <Context>
        <AppRoutes />
      </Context>
    </StaticRouter>
  );
}

export default MyApp;

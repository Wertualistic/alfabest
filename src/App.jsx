import React, { lazy, useEffect, useState } from "react";
import "./global.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Home/components/Footer";
import About from "./Pages/About/About";
import Carrier from "./Pages/Carrier/Carrier";
import Purchase from "./Pages/Purchase/Purchase";
import Cooperation from "./Pages/Cooperation/Cooperation";
import Contacts from "./Pages/Contacts/Contacts";
import TransPortServices from "./Pages/TransportServices/TransPortServices";
import Corporate from "./Pages/Corporate/Corporate";
import Consumer from "./Pages/Consumer/Consumer";
import Engineering from "./Pages/Engineering/Engineering";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import loadingImg from "../public/loading.svg";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  const lang = localStorage.getItem("lang") || "ru";
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {loading ? (
        <div className="w-100 h-[100vh] flex items-center justify-center">
          <img src={loadingImg} alt="" />
        </div>
      ) : (
        <QueryClientProvider client={queryClient}>
          <div className="flex flex-col justify-center w-100">
            <Navbar lang={lang} />
            <Routes>
              <Route path="/" exact element={<Home lang={lang} />} />
              <Route path="/about" exact element={<About lang={lang} />} />
              <Route path="/carrier" exact element={<Carrier lang={lang} />} />
              <Route
                path="/purchase"
                exact
                element={<Purchase lang={lang} />}
              />
              <Route
                path="/cooperation"
                exact
                element={<Cooperation lang={lang} />}
              />
              <Route path="/contact" exact element={<Contacts lang={lang} />} />
              <Route
                path="/transportation"
                exact
                element={<TransPortServices lang={lang} />}
              />
              <Route
                path="/catering"
                exact
                element={<Corporate lang={lang} />}
              />
              <Route
                path="/household"
                exact
                element={<Consumer lang={lang} />}
              />
              <Route
                path="/engineering"
                exact
                element={<Engineering lang={lang} />}
              />
            </Routes>
            <Footer lang={lang} />
          </div>
        </QueryClientProvider>
      )}
    </>
  );
};

export default App;

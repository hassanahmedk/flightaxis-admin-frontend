import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Bookings from "../Components/Bookings";
import Flights from "../Components/Flights";
import Messages from "../Components/Messages";
import Quotes from "../Components/Quotes";

import "../assets/css/main.css"

function Main() {

  return (
    <div id="main">
      <Routes className="routes">
        <Route path="/" element={<Flights />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="messages" element={<Messages />} />
        <Route path="*" element={<Flights />} />
      </Routes>
    </div>
  );
}

export default Main;

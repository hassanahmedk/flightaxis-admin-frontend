import React, { useEffect, useState } from "react";
import { getFlights } from "../assets/api/flights";
import AddFlight from "./Inner Components/AddFlight";
import Flight from "./Inner Components/Flight";
import FlightOptions from "./Inner Components/FlightOptions";
import Header from "./Inner Components/Header";

function Flights() {
  const [AllFlights, setAllFlights] = useState([]);
  const [flights, setFlights] = useState([]);
  const [flightsCity, setFlightsCity] = useState("");

  const [addFlightDialog, setAddFlightDialog] = useState(false);

  useEffect(() => {
    getFlights().then((data) => setAllFlights(data));
  }, []);

  function setCity(city) {
    setFlightsCity(city);
    setFlights(() => {
      return AllFlights.filter((flight) => flight.leaving_from.includes(city));
    });
  }

  function updateFlightsArray(_id, editedFlight) {
    setAllFlights(() => {
      return AllFlights.filter((flight) => {
        if (flight._id === _id) {
          console.log(_id)
          console.log(editedFlight)
          flight.months_fare = editedFlight.months_fare;
        }
        return flight;
      });
    });
    setFlights(() => {
      return AllFlights.filter((flight) => flight.leaving_from.includes(flightsCity));
    });
  }

  return (
    <div id="flights-section">
      <Header
        label="Flight"
        count={flights.length}
        openAddFlightDialog={() => setAddFlightDialog(true)}
      />
      <AddFlight
        open={addFlightDialog}
        handleClose={() => setAddFlightDialog(false)}
        updateArray={(newFlight) =>
          setFlights((prev) => {
            return [...prev, newFlight];
          })
        }
      />

      <FlightOptions flightsCity={flightsCity} setFlightsCity={setCity} />

      <div className="flights">
        {flights.length !== 0 && (
          <h2 className="flights-city-heading">{flightsCity} Flights</h2>
        )}
        {flights.map((flight) => {
          return (
            <Flight
              _id={flight._id}
              airline={flight.airline}
              leaving_from={flight.leaving_from}
              going_to={flight.going_to}
              months_fare={flight.months_fare}
              updateFlightsArray={updateFlightsArray}
            />
          );
        })}

        {flights.length === 0 && (
          <div className="no-flights-msg">
            Please select city to show flights
          </div>
        )}
      </div>
    </div>
  );
}

export default Flights;

import React, { useEffect, useState } from "react";
import { getBookings } from "../assets/api/bookings";
import Header from "./Inner Components/Header";
import Request from "./Inner Components/Request";

function Bookings() {
    const [bookings, setBookings] = useState([
    ]);
  
    useEffect(() => {
      getBookings().then((data) => {setBookings(data.reverse()); console.log(data)});
    }, []);
  
  return (
    
    <div id="bookings">
      <Header label="Booking" count={bookings.length} />

      <div className="bookings">
        {bookings.map((booking) => {
          return (
            <Request
            _id={booking._id}
            name={booking.name}
            airline={booking.airline}
            customerName={booking.customerName}
            leaving_from={booking.leaving_from}
            going_to={booking.going_to}
            trip_type={booking.trip_type}
            departing_on={booking.departing_on}
            returning_on={booking.returning_on}
            no_of_passengers={booking.no_of_passengers}
            adults={booking.adults}
            kids={booking.kids}
            infants={booking.infants}
            customer_email={booking.customer_email}
            customer_phone={booking.customer_phone}
            total_fare={booking.total_fare}
            submittedOn={booking.submittedOn}
            side_notes={booking.side_notes}
            label="Booking"
            whatToDelete="booking"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Bookings;

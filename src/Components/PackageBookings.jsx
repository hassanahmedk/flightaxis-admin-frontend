import React, { useEffect, useState } from "react";
import { getBookings, getPackageBookings } from "../assets/api/packageBookings";
import Header from "./Inner Components/Header";
import PackageBooking from "./Inner Components/PackageBooking";
import Request from "./Inner Components/Request";

function PackageBookings() {
    const [packageBookings, setPackageBookings] = useState([
    ]);
  
    useEffect(() => {
      getPackageBookings().then((data) => {setPackageBookings(data); console.log(data)});
    }, []);
  
  return (
    
    <div id="packageBookings">
      <Header label="PackageBooking" count={packageBookings.length} />

      <div className="package-bookings">
        {packageBookings.map((packageBooking) => {
          return (
            <PackageBooking
            _id={packageBooking._id}
            name={packageBooking.name}
            airline={packageBooking.airline}
            leaving_from={packageBooking.leaving_from}
            going_to={packageBooking.going_to}
            customer_email={packageBooking.customer_email}
            customer_phone={packageBooking.customer_phone}
            total_fare={packageBooking.total_fare}
            submittedOn={packageBooking.submittedOn}
            side_notes={packageBooking.side_notes}
            label="PackageBooking"
            whatToDelete="packageBooking"
            />
          );
        })}
      </div>
    </div>
  );
}

export default PackageBookings;

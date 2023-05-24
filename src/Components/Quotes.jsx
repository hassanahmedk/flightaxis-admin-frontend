import React, { useEffect, useState } from "react";
import { getQuotes } from "../assets/api/quotes";
import Header from "./Inner Components/Header";
import Request from "./Inner Components/Request";

function Quotes() {
    const [quotes, setQuotes] = useState([
    ]);
  
    useEffect(() => {
      getQuotes().then((data) => setQuotes(data));
    }, []);
  
  return (
    <div id="quotes">
      <Header label="Quote" count={quotes.length} />

      <div className="quotes">
        {quotes.map((quote) => {
          return (
            <Request
            _id={quote._id}
            name={quote.name}
            customerName={quote.customerName}
            leaving_from={quote.leaving_from}
            going_to={quote.going_to}
            trip_type={'Return'}
            departing_on={quote.departing_on}
            returning_on={quote.returning_on}
            no_of_passengers={quote.no_of_passengers}
            adults={quote.adults}
            kids={quote.kids}
            infants={quote.infants}
            customer_email={quote.customer_email}
            customer_phone={quote.customer_phone}
            total_fare={quote.total_fare}
            submittedOn={quote.submittedOn}
            side_notes={quote.side_notes}
            label="Quote"
            whatToDelete="quote"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Quotes;

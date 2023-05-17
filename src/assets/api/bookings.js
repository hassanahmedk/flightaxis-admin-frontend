export const getBookings = async () => {
    const response = await fetch("http://flightaxis.vercel.app/Bookings");
    const data = await response.json();
    return data;
  };
  
  export const addBooking = async (formData) => {
    const response = await fetch("http://flightaxis.vercel.app/Bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  };
  
  export const editBooking = async (id, formData) => {
    const response = await fetch("http://flightaxis.vercel.app/Bookings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, ...formData}),
    });
    const data = await response.json();
    return data;
  };
  
  
  export const deleteBooking = async (_id) => {
    const response = await fetch("http://flightaxis.vercel.app/Bookings", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: _id }),
    });
    const data = await response.json();
    return data;
  };
  
export const getPackageBookings = async () => {
    const response = await fetch("https://flightaxis.vercel.app/PackageBookings");
    const data = await response.json();
    return data;
  };
  

  export const editBooking = async (id, formData) => {
    const response = await fetch("https://flightaxis.vercel.app/PackageBookings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, ...formData}),
    });
    const data = await response.json();
    return data;
  };
  
  
  export const deletePackageBooking = async (_id) => {
    const response = await fetch("https://flightaxis.vercel.app/PackageBookings", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: _id }),
    });
    const data = await response.json();
    return data;
  };
  
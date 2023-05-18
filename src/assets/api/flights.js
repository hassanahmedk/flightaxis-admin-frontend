export const getFlights = async () => {
  const response = await fetch("https://flightaxis.vercel.app/flights");
  const data = await response.json();
  return data;
};

export const addFlight = async (formData) => {
  const response = await fetch("https://flightaxis.vercel.app/flights", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
};

export const editFlight = async (id, formData) => {
  const response = await fetch("https://flightaxis.vercel.app/flights", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id, ...formData}),
  });
  const data = await response.json();
  return data;
};


export const deleteFlight = async (_id) => {
  const response = await fetch("https://flightaxis.vercel.app/flights", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: _id }),
  });
  const data = await response.json();
  return data;
};

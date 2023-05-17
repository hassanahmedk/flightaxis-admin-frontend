export const getQuotes = async () => {
    const response = await fetch("http://flightaxis.vercel.app/Quotes");
    const data = await response.json();
    return data;
  };
  
  export const addQuote = async (formData) => {
    const response = await fetch("https://flightaxis.vercel.app/Quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  };
  
  export const editQuote = async (id, formData) => {
    const response = await fetch("https://flightaxis.vercel.app/Quotes", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, ...formData}),
    });
    const data = await response.json();
    return data;
  };
  
  
  export const deleteQuote = async (_id) => {
    const response = await fetch("https://flightaxis.vercel.app/Quotes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: _id }),
    });
    const data = await response.json();
    return data;
  };
  
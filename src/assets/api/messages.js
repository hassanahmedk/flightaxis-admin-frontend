export const getMessages = async () => {
    const response = await fetch("https://flightaxis.vercel.app/Messages");
    const data = await response.json();
    return data;
  };
  
  export const addMessage = async (formData) => {
    const response = await fetch("https://flightaxis.vercel.app/Messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  };
  
  export const editMessage = async (id, formData) => {
    const response = await fetch("https://flightaxis.vercel.app/Messages", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, ...formData}),
    });
    const data = await response.json();
    return data;
  };
  
  
  export const deleteMessage = async (_id) => {
    const response = await fetch("https://flightaxis.vercel.app/Messages", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: _id }),
    });
    const data = await response.json();
    return data;
  };
  
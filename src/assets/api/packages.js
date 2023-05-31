export const getPackages = async (city) => {
    const response = await fetch("https://flightaxis.vercel.app/packages/"+city);
    const data = await response.json();
    console.log(data)
    return data;
  };
  
  export const addPackage  = async (formData) => {
    const response = await fetch("https://flightaxis.vercel.app/packages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  };
  
  export const editPackage  = async (id, formData) => {
    const response = await fetch(`https://flightaxis.vercel.app/packages/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, ...formData}),
    });
    const data = await response.json();
    return data;
  };
  
  
  export const deletePackages  = async (_id) => {
    const response = await fetch("https://flightaxis.vercel.app/packages", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: _id }),
    });
    const data = await response.json();
    return data;
  };
  
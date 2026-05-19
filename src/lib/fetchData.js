//fetch all the cars from server
export const fetchCars = async () => {
  const res = await fetch(`${process.env.SERVER_API_URL}/cars`);
  const data = await res.json();
  return data || [];
};

// fetch for featured data
export const featuredCars = async () => {
  const res = await fetch(`${process.env.SERVER_API_URL}/featured`);
  const data = await res.json();
  return data || [];
};

// fetch single car details
export const fetchSingleCar = async (id, token) => {
  const res = await fetch(`${process.env.SERVER_API_URL}/cars/${id}`, {
    headers: {
      authorization: `Bearer ${token}` || "",
    },
  });
  const data = await res.json();

  return data;
};

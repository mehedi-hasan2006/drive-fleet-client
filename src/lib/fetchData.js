//fetch all the cars from server for explore cars
export const fetchCars = async (searchTerm = "") => {
  const res = await fetch(
    `${process.env.SERVER_API_URL}/cars?search=${searchTerm}`,
  );
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

// fetch bookings data for specific users

export const fetchBookingsData = async (userId, token) => {
  const res = await fetch(`${process.env.SERVER_API_URL}/bookings/${userId}`, {
    headers: {
      authorization: `Bearer ${token}` || "",
    },
  });

  const data = res.json();
  return data;
};


// fetch add cars data for specific users
export const fetchMyAddedCars = async (userId, token) => {
  const res = await fetch(
    `${process.env.SERVER_API_URL}/cars/my-added-cars/${userId}`,
    {
      headers: {
        authorization: `Bearer ${token}` || "",
      },
    },
  );
  const data = res.json();
  return data;
};

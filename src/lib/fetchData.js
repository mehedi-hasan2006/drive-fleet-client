//fetch all the cars from server for explore cars
export const fetchCars = async (searchTerm, type) => {
  const params = new URLSearchParams();

  if (searchTerm) {
    params.append("search", searchTerm);
  }

  if (type) {
    params.append("type", type);
  }

  const res = await fetch(
    `${process.env.SERVER_API_URL}/cars?${params.toString()}`,
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

// fetch bookings data for specific users || my bookings
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

// api for delete car data
export const deleteCarData = async (carId, token) => {
  const res = await fetch(`http://localhost:5000/cars/my-added-cars/${carId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}` || "",
    },
  });
  const data = await res.json();
  return data;
};

// api for update car data
export const updateCarData = async (carId, carData, token) => {
  const res = await fetch(`http://localhost:5000/cars/my-added-cars/${carId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}` || "",
    },
    body: JSON.stringify(carData),
  });
  const data = await res.json();
  return data;
};

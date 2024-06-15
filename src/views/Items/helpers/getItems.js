import axios from "axios";

const GetItems = async (token) => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/items", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEzLCJleHAiOjE3MTg1NDM2MDZ9.72QIi0Dzfwe0VfT0i8bgOFtdtGUHoxA14Vhoi0vp2WE`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error; // Re-throw the error to handle it upstream if needed
  }
};

export default GetItems;

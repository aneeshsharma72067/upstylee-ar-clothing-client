import axios from "axios";

const signup = async (data) => {
  if (data.first_name === "") {
    return { success: false, message: "Please enter your first name !!" };
  }
  if (data.last_name === "") {
    return { success: false, message: "Please enter your Last name !!" };
  }
  if (data.email === "") {
    return { success: false, message: "Please enter your Email !!" };
  }
  if (data.phone === "") {
    return { success: false, message: "Please enter your Phone Number !!" };
  }
  if (data.password === "") {
    return { success: false, message: "Please enter a password !!" };
  }
  try {
    const response = await axios.post("/api/auth/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return {
      success: true,
      data: response.data,
      message: "Registered Successfully !!",
    };
  } catch (error) {
    console.log(error.response);
    return {
      success: false,
      data: error.response,
      message: error.response.data.error,
    };
  }
};

const login = async (data) => {
  console.log(data);
  if (data.email === "") {
    return { success: false, message: "Please enter your Email !!" };
  }
  if (data.password === "") {
    return { success: false, message: "Please enter your Password !!" };
  }
  try {
    const response = await axios.post("/api/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return {
      success: true,
      data: response.data,
      message: "Logged In Successfully !!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: error.response,
      message: error.response.data.error,
    };
  }
};

const checkIfUserLoggedIn = async () => {
  try {
    const response = await axios.get("/api/auth/check-auth");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

const logout = async () => {
  try {
    const response = await axios.post("/api/auth/logout");
    return { success: response.status === 200 };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export { signup, login, checkIfUserLoggedIn, logout };

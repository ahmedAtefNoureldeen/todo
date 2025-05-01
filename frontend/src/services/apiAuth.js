import axios from "axios";


const API_BASE_URL = "http://localhost:3000/api/v1/users";


export async function signup({name, email, password, confirmPassword, phone}) {
    try {
      const passwordConfirm = confirmPassword;
        const response = await axios.post(`${API_BASE_URL}/signup`, {
          name,
          email,
          password,
          passwordConfirm,
          phone
        },{
          withCredentials: true 
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Signup failed");
      }
}



export async function login({email, password}) {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
          email,
          password
        }, { withCredentials: true }); // Ensure cookies are sent
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Login failed");
      }
}

export async function logout() {
    try {
        await axios.get(`${API_BASE_URL}/logout`, { withCredentials: true });
      } catch (error) {
        throw new Error(error.response?.data?.message || "Logout failed");
      }
    
}


export async function getCurrentUser(){
    try {
        const response = await axios.get(`${API_BASE_URL}/me`, {
          withCredentials: true,
        });
        return response.data.data;
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
}

export async function updateMe(userData) {
    try {
        const response = await axios.patch(`${API_BASE_URL}/updateMe`, userData, { withCredentials: true });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Update failed");
      }
}
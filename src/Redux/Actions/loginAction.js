import Swal from "sweetalert2";
import API from "../../api";
import {
  setLoading,
  setError,
  setMessage,
  setAuthentication,
  setUser,
  setRoles,
  clearError,
  clearAuth,
} from "../Reducer/authSlice";

const loginAction = (formData, navigate) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(clearAuth());

  try {
    const response = await API.post("/login", formData);
    console.log("Login response:", response.data);

    if (response.status === 200) {
      const data = response.data.data;
      const token = data.access_token;
      const user = {
        full_name: data.full_name,
        email: data.email,
        role: data.role,
      };
      const roles = [data.role];

      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user_role", JSON.stringify(roles));

        dispatch(setAuthentication(true));
        dispatch(setUser(user));
        dispatch(setRoles(roles));
        dispatch(setMessage("Login successful"));
        

        Swal.fire("Login Successful", "", "success");

        navigate("/dashboard");
      } else {
        dispatch(setError("Invalid login response"));
      }
    } else {
      dispatch(setError("Login failed"));
    }
  } catch (error) {
    console.error("Login Error:", error);
    dispatch(setError(error.response?.data?.data?.message || "Failed to login"));
    dispatch(setAuthentication(false));
    dispatch(setUser(null));
    dispatch(clearError(null))
  } finally {
    dispatch(setLoading(false));
  }
};

export default loginAction;

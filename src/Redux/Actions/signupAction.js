import Swal from "sweetalert2";
import API from "../../api";
import {
  setLoading,
  setError,
  setMessage,
  setAuthentication,
  setUser,
  setRoles,
  clearAuth,
} from "../Reducer/authSlice";

const registerAction = (formData) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(clearAuth());
  console.log("Sending registration to backend:", formData);

  try {
    const response = await API.post("/register", formData);
    console.log("Register response:", response.data);

    if (response.status === 200 || response.status === 201) {
      const data = response.data.data;
      const token = data?.access_token;
      const user = {
        full_name: data?.full_name,
        email: data?.email,
        role: data?.role,
      };
      const roles = [data?.role];
      Swal.fire("Registration Successful", "", "success");
      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user_role", JSON.stringify(roles));

        dispatch(setAuthentication(true));
        dispatch(setUser(user));
        dispatch(setRoles(roles));
        dispatch(setMessage(response.data.data.message || "Registration successful"));

        // Optional: navigate after registration
        // navigate("/dashboard");
      } else {
        dispatch(setError("Invalid registration response"));
      }
    } else {
      dispatch(setError("Registration failed"));
    }
  } catch (error) {
    console.error("Registration Error:", error);
    const errorMsg =
      error.response?.data?.data?.message ||
      error.response?.data?.detail ||
      "Failed to register";

    dispatch(setError(errorMsg));
    dispatch(setAuthentication(false));
    dispatch(setUser(null));

    Swal.fire("Registration Failed", errorMsg, "error");
  } finally {
    dispatch(setLoading(false));
  }
};

export default registerAction;

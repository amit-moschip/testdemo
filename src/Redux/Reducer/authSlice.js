import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  message: null,
  user: null,
  roles: [],
  users: []
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
      if (action.payload) {
        state.error = null;
        state.message = null;
      }
    },
    
     
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },

    setMessage: (state, action) => {
      state.message = action.payload;
      state.error = null;
    },

    clearError: (state) => {
      state.error = null;
      state.message = null;
    },
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    setRoles: (state, action) => {
      state.roles = action.payload;
    },

    setUsers: (state, action) => {
      state.users = action.payload;
    },

    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.roles = [];
      state.users = [];
      state.error = null;
      state.message = null;
      state.loading = false;
    }
  }
});

export const { 
  setLoading, 
  setError, 
  setMessage, 
  clearError,
  setAuthentication, 
  setUser, 
  setRoles, 
  setUsers, 
  clearAuth 
} = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;

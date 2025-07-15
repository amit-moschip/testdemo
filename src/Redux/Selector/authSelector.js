import { createSelector } from "@reduxjs/toolkit";

export const selectAuth = (state) => state.auth; // or state.loginReducer if not renamed


export const selectIsAuthenticated = createSelector(
  [selectAuth],
  (auth) => auth?.isAuthenticated === true
);

export const selectLoading = createSelector(
  [selectAuth],
  (auth) => auth?.loading === true
);

export const selectError = createSelector(
  [selectAuth],
  (auth) => auth?.error || null
);

export const selectMessage = createSelector(
  [selectAuth],
  (auth) => auth?.message || null
);

export const selectUser = createSelector(
  [selectAuth],
  (auth) => auth?.user || null
);

export const selectRoles = createSelector(
  [selectAuth],
  (auth) => auth?.roles || []
);

export const selectUsers = createSelector(
  [selectAuth],
  
  (auth) => auth?.users || []
);

export const selectUserByUserName = createSelector(
  [selectUsers, (_, user_name) => user_name],
  (users, user_name) => users.find((user) => user.user_name === user_name) || null
);

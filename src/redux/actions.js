import { createAction } from "@reduxjs/toolkit";

// fetchContact
export const fetchContactRequest = createAction("contacts/fetchContactRequest");
export const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
export const fetchContactError = createAction("contacts/fetchContactError");

// addContact
export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

// updateContact
export const updateContactRequest = createAction(
  "contacts/updateContactRequest"
);
export const updateContactSuccess = createAction(
  "contacts/updateContactSuccess"
);
export const updateContactError = createAction("contacts/updateContactError");

// deleteContact
export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

// filterContact
export const changeFilter = createAction("contacts/changeFilter");

// registerUser
export const registerRequest = createAction("auth/registerRequest");
export const registerSuccess = createAction("auth/registerSuccess");
export const registerError = createAction("auth/registerError");

// loginUser
export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

// logoutUser
export const logoutRequest = createAction("auth/logoutRequest");
export const logoutSuccess = createAction("auth/logoutSuccess");
export const logoutError = createAction("auth/logoutError");

// getCurrentUser
export const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
export const getCurrentUserSuccess = createAction("auth/getCurrentUserRequest");
export const getCurrentUserError = createAction("auth/getCurrentUserError");

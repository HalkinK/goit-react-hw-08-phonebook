import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as contactActions from "./actions";
import * as userActions from "./actions";

const initState = { name: null, email: null };
const user = createReducer(initState, {
  [userActions.registerSuccess.type]: (state, action) => action.payload.user,
  [userActions.loginSuccess.type]: (state, action) => action.payload.user,
  [userActions.logoutSuccess.type]: () => initState,
  [userActions.getCurrentUserSuccess.type]: (state, action) => action.payload,
});
const token = createReducer(null, {
  [userActions.registerSuccess.type]: (state, action) => action.payload.token,
  [userActions.loginSuccess.type]: (state, action) => action.payload.token,
  [userActions.logoutSuccess.type]: () => null,
});
const error = createReducer(null, {
  [userActions.registerError.type]: (state, action) => action.payload,
  [userActions.loginError.type]: (state, action) => action.payload,
  [userActions.logoutError.type]: (state, action) => action.payload,
  [userActions.getCurrentUserError.type]: (state, action) => action.payload,
});

const isAuthenticated = createReducer(false, {
  [userActions.registerSuccess.type]: () => true,
  [userActions.loginSuccess.type]: () => true,
  [userActions.getCurrentUserSuccess.type]: () => true,
  [userActions.logoutSuccess.type]: () => false,
  [userActions.registerError.type]: () => false,
  [userActions.loginError.type]: () => false,
  [userActions.getCurrentUserError.type]: () => false,
});

const items = createReducer([], {
  [contactActions.fetchContactSuccess]: (_, { payload }) => payload,
  [contactActions.addContactSuccess]: (state, { payload }) => {
    const matching = state.find(
      (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
    );
    if (matching) {
      alert(`${matching.name} is already in contacts.`);
      return;
    }
    return [...state, payload];
  },
  [contactActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [contactActions.changeFilter]: (state, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [contactActions.fetchContactRequest]: () => true,
  [contactActions.fetchContactSuccess]: () => false,
  [contactActions.fetchContactError]: () => false,
  [contactActions.addContactRequest]: () => true,
  [contactActions.addContactSuccess]: () => false,
  [contactActions.addContactError]: () => false,
  [contactActions.deleteContactRequest]: () => true,
  [contactActions.deleteContactSuccess]: () => false,
  [contactActions.deleteContactError]: () => false,
});

const contacts = combineReducers({
  items,
  filter,
  isLoading,
});

const auth = combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});

const reducers = { contacts, auth };

export default reducers;

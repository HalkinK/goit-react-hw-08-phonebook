import axios from "axios";
import * as contactsActions from "./actions";
import * as userActions from "./actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

// Operations with users
const token = {
  set(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common["Authorization"] = ``;
  },
};

export const register = (credential) => (dispatch) => {
  dispatch(userActions.registerRequest());
  axios
    .post("/users/signup", credential)
    .then((res) => {
      token.set(res.data.token);
      dispatch(userActions.registerSuccess(res.data));
    })
    .catch((error) => dispatch(userActions.registerError(error.message)));
};

export const logIn = (credential) => (dispatch) => {
  dispatch(userActions.loginRequest());
  axios
    .post("/users/login", credential)
    .then((res) => {
      token.set(res.data.token);
      dispatch(userActions.loginSuccess(res.data));
    })
    .catch((error) => dispatch(userActions.loginError(error.message)));
};

export const logOut = () => (dispatch) => {
  dispatch(userActions.logoutRequest());
  axios
    .post("/users/logout")
    .then((res) => {
      token.unset();
      dispatch(userActions.logoutSuccess(res.data));
    })
    .catch((error) => dispatch(userActions.logoutError(error.message)));
};

export const fetchCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  token.set(persistedToken);
  dispatch(userActions.getCurrentUserRequest());
  axios
    .get("/users/current")
    .then((res) => {
      dispatch(userActions.getCurrentUserSuccess(res.data));
    })
    .catch((error) => dispatch(userActions.getCurrentUserError(error.message)));
};

// Operations with contacts
export const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactSuccess(data)))
    .catch((error) =>
      dispatch(contactsActions.fetchContactError(error.message))
    );
};

export const addContact = (data) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post("/contacts", data)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch((error) => dispatch(contactsActions.addContactError(error.message)));
};

export const updateContact = (id) => (dispatch) => {
  dispatch(contactsActions.updateContactRequest());
  axios
    .patch(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.updateContactSuccess(id)))
    .catch((error) =>
      dispatch(contactsActions.updateContactError(error.message))
    );
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch((error) =>
      dispatch(contactsActions.deleteContactError(error.message))
    );
};

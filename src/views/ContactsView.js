import { useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";

import * as contactSelectors from "../redux/selectors";

function ContactsView() {
  const isLoading = useSelector((state) => contactSelectors.getLoading(state));
  const error = useSelector((state) => contactSelectors.getError(state));

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong</h2>}
      <ContactList />
    </>
  );
}

export default ContactsView;

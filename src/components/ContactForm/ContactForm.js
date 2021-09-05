import { useState } from "react";
import styles from "../ContactForm/ContactForm.module.css";
import { useDispatch /*useSelector*/ } from "react-redux";
import * as contactOperations from "../../redux/operations";

function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(contactOperations.addContact({ name, number }));

    resetForm();
  };

  function resetForm() {
    setName("");
    setNumber("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label /*htmlFor={nameInputId}*/>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          // id={nameInputId}
        />
      </label>
      <br />
      <label /*htmlFor={numberInputId}*/>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          // id={numberInputId}
        />
      </label>
      <br />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;

// import React from "react";
import styles from "../Filter/Filter.module.css";
import { useDispatch /*useSelector*/ } from "react-redux";
import * as contactActions from "../../redux/actions";
// import * as contactSelectors from "../../redux/contact-selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = (e) =>
    dispatch(contactActions.changeFilter(e.currentTarget.value));

  // const filter = useSelector(contactSelectors.getFilter);

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        // value={filter}
        type="text"
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;

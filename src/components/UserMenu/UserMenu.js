import { useDispatch, useSelector } from "react-redux";
import * as userSelectors from "../../redux/selectors";
import * as userOperations from "../../redux/operations";
// import defaultAvatar from "./default-avatar.png";
import buttonStyles from "../ContactForm/ContactForm.module.css";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(userSelectors.getUserName);
  //   const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button
        className={buttonStyles.button}
        type="button"
        onClick={() => dispatch(userOperations.logOut())}
      >
        Выйти
      </button>
    </div>
  );
}

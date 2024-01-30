import { ToastContainer } from "react-toastify";
import styles from "./informations.module.css";
import Donnees from "../inscription/DonneesFormulaire";
import "react-toastify/dist/ReactToastify.css";

function Informations() {
  const donnees = Donnees();
  const informationsUser = [
    {
      name: "firstname",
      titre: "Prénom",
      placeHolder: donnees.firstname,
      type: "text",
      value: donnees.firstname,
      function: donnees.handleChangeFirstname,
      small: donnees.falseFirstname,
    },
    {
      name: "lastname",
      titre: "Nom de famille",
      placeHolder: donnees.lastname,
      type: "text",
      value: donnees.lastname,
      function: donnees.handleChangeLastname,
      small: donnees.falseLastname,
    },
    {
      name: "mail",
      titre: "Email",
      placeHolder: donnees.email,
      type: "email",
      value: donnees.email,
      function: donnees.handleChangeEmail,
      small: donnees.falseEmail,
    },
    {
      name: "pseudo",
      titre: "Pseudo",
      placeHolder: donnees.pseudo,
      type: "text",
      value: donnees.pseudo,
      function: donnees.handleChangePseudo,
      small: donnees.falsePseudo,
    },
  ];

  return (
    <div className={styles.informations}>
      {informationsUser.map((element) => (
        <div key={element.name} className={styles.informations__globalRange}>
          <div className={styles.informations__globalRange__title}>
            <label htmlFor={element.name}>{element.titre}</label>
          </div>
          <input
            type={element.type}
            name={element.name}
            placeholder={element.placeHolder}
            className={styles.informations__globalRange__ranges}
            value={element.value}
            onChange={element.function}
          />
          {element.small}
        </div>
      ))}
      <div className={styles.informations__globalRange}>
        <div className={styles.informations__globalRange__title}>
          <label htmlFor="password">Mot de passe</label>
        </div>
        <input
          type="password"
          name="password"
          className={styles.informations__globalRange__ranges}
          placeholder="Mot de passe"
          value={donnees.password}
          onChange={donnees.handleChangePassword}
        />
        {donnees.falsePassword}
        <input
          type="password"
          name="confirmPassword"
          className={styles.informations__globalRange__ranges}
          placeholder="Confirmer mot de passe"
          value={donnees.confirmPassword}
          onChange={donnees.handleChangeConfirmPassword}
        />
        {donnees.falseConfirmPassword}
        <div className={styles.informations__globalRange__bothButton}>
          <button
            type="submit"
            className={styles.informations__globalRange__bothButton__button}
          >
            Modifier
          </button>
          <button
            type="button"
            className={styles.informations__globalRange__bothButton__button}
            id={styles.deletAccountButton}
          >
            Supprimer mon compte
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Informations;

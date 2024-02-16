import PropTypes from "prop-types";
import styles from "./Card.module.css";
import Form from "../pages/Form";

export default function Card({ data, form, setForm }) {
  const modify = () => {
    setForm(true);
  };

  return (
    <>
      <div className={styles.card}>
        <h1>{data.affair}</h1>
        {data.lieux.map((lieu) => {
          return (
            <div key={lieu.commune} className={styles.center}>
              <h2>{lieu.commune}</h2>
              <h2>{lieu.dept}</h2>
            </div>
          );
        })}
        <h2>{data.details}</h2>
        <button onClick={modify}>Modifier</button>
      </div>

      {!!form && <Form setForm={setForm} affair={data} />}
    </>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  form: PropTypes.bool.isRequired,
  setForm: PropTypes.func.isRequired,
};

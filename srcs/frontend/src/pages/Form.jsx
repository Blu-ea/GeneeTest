import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import Datalist from "../components/Datalist";
import TextInput from "../components/TextInput";
import styles from "./Form.module.css";

export default function Form({ setForm, affair }) {
  console.log(affair);
  const formik = useFormik({
    initialValues: {
      name: affair ? affair.affair : "",
      commune: affair ? affair.lieux[0].commune : "",
      dept: affair ? affair.lieux[0].dept : "",
      details: affair ? affair.details : "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Requis"),
      commune: Yup.string().required("Requis"),
      dept: Yup.string().required("Requis"),
      details: Yup.string().required("Requis"),
    }),
    onSubmit: (values) => {
      setForm(false);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.modalBG}>
      <Datalist id="test" values={["test", "test2"]} />
      <Datalist id="test2" values={["test3", "test4"]} />

      <div className={styles.modal}>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="div">
            <h1>Nom de l&apos;affaire</h1>
            <TextInput
              label="Nom de l'affaire"
              hideLabel
              type="text"
              id="name"
              placeholder="Entrez le nom de l'affaire"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="div">
            <h1>Lieu de l&apos;affaire</h1>
            <TextInput
              label="Commune"
              type="text"
              id="commune"
              placeholder="Entrez le nom de la commune"
              list="test"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.commune}
            />
            {formik.touched.commune && formik.errors.commune ? (
              <div>{formik.errors.commune}</div>
            ) : null}
            <TextInput
              label="Département"
              type="text"
              id="dept"
              placeholder="Entrez le nom du département"
              list="test2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dept}
            />
            {formik.touched.dept && formik.errors.dept ? (
              <div>{formik.errors.dept}</div>
            ) : null}
            <TextInput
              label="Précisions"
              type="text"
              id="details"
              placeholder="Entrez les informations supplémentaires"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.details}
            />
            {formik.touched.details && formik.errors.details ? (
              <div>{formik.errors.details}</div>
            ) : null}
          </div>
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  setForm: PropTypes.func.isRequired,
  affair: PropTypes.object,
};

import PropTypes from "prop-types";

export default function Datalist({ id, values }) {
  return (
    <datalist id={id}>
      {values.map((value) => (
        <option key={value} value={value}></option>
      ))}
    </datalist>
  );
}

Datalist.propTypes = {
  id: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
};

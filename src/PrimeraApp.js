import PropTypes from "prop-types";

const PrimeraApp = ({ saludo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>Este es un componente</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;

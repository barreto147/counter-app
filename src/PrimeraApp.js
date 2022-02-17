import PropTypes from "prop-types";

const PrimeraApp = ({
  saludo,
  /*subtitulo = "Este es un componente"*/ subtitulo,
}) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Este es un subtitulo",
};

export default PrimeraApp;

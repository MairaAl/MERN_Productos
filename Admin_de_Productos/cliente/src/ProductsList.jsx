import PropTypes from "prop-types";

export default function ProductsList(props) {
  return (
    <div>
      {props.products.map((product, index) => {
        return <p key={index}>{product.name}</p>;
      })}
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

import { useParams } from "react-router-dom";

const Product = () => {
  const { abc } = useParams();
  return <div>프러덕트 {abc}</div>;
  //   const { id } = useParams();
  //   useEffect(() => {}, []);
};
export default Product;

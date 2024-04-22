import { useParams } from "react-router-dom";

function ProductDetail() {

    const param = useParams()

  return (
    <main>
      <h1>Product Detail</h1>
      {param.productId}
    </main>
  );
}

export default ProductDetail;

import { Link } from "react-router-dom";

function ProductPage() {
    const PRODUCTS = [
        { id: "p1", title: "Product 1" },
        { id: "p2", title: "Product 2" },
        { id: "p3", title: "Product 3" },
      ];
    
    
    return <><h1>Product Page</h1>
        <p>Here are the product Page!</p>
        <p>Want to go on the Home page <Link to='/'>click here</Link></p>
        <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`} >{product.title}</Link>
          </li>
        ))}
      </ul>
     </>
};


export default ProductPage;
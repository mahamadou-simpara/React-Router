import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigationHandler() {
    navigate("/products");
  }

  return (
    <div style={{ margin: "2rem auto" }}>
      <h1>Hello World !</h1>
      <p>React Router test !</p>
      <p>
        Want to go on the Product page <Link to="/products">click here</Link>
      </p>
      <button style={{padding: '4px', backgroundColor: 'gray', borderRadius: '5px', border: 'none', cursor: 'pointer'}} onClick={navigationHandler}>Navigate</button>
    </div>
  );
}

export default HomePage;

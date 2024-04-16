import { Link } from "react-router-dom";

function HomePage() {
    
    return <div>
        <h1>Hello World !</h1> 
        <p>React Router test !</p>
        <p>Want to go on the Product page <Link to='/products'>click here</Link></p>

    </div>
}


export default HomePage; 
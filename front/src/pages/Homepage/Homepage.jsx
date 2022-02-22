import { Link } from "react-router-dom";
import "./Homepage.css";

const HomePage = () => {
  return (
    <section>
      <h2 className="secondary-header">Please Choose A Client:</h2>
      <ul>
        <Link to="/clients/1" className="li-items">
          Client 1
        </Link>
        <Link to="/clients/2" className="li-items">
          Client 2
        </Link>
        <Link to="/clients/3" className="li-items">
          Client 3
        </Link>
      </ul>
      <button onClick={() => window.location.href = "http://localhost:8080/admin"} className="admin-btn">I'm An Admin!</button> 
    </section>
  );
};
export default HomePage;

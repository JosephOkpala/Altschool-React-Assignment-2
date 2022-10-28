import { useNavigate } from 'react-router-dom';
import './home.css';
import users from '../users.png';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div>
        <h1>Welcome to Userly</h1>
        <button onClick={() => navigate('/users')}>Get started</button>
      </div>
      <img src={users} alt="users" />
    </div>
  );
};

export default Home;

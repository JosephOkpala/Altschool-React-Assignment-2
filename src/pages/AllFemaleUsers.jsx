import { useEffect, useState } from 'react';
import './allusers.css';

const AllFemaleUsers = () => {
  const [femaleUsers, setFemaleUsers] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://randomuser.me/api/?gender=female&results=100'
        );
        const data = await response.json();
        setFemaleUsers(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  console.log(femaleUsers);

  if (loading) {
    return <h1 className="center-loading">Loading...</h1>;
  }

  return (
    <div className="allUsers">
      {femaleUsers &&
        femaleUsers.map((user) => (
          <div key={user.login.uuid} className="container-all">
            <div>
              <img src={user.picture.large} alt="" className="img" />
              <p className="bold">{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
              <p>{user.cell}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllFemaleUsers;

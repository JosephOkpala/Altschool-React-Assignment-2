import { useEffect, useState } from 'react';
import './allusers.css';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://randomuser.me/api/?results=100');
        const data = await response.json();
        setAllUsers(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  console.log(allUsers);

  if (loading) {
    return <h1 className="center-loading">Loading...</h1>;
  }

  return (
    <div className="allUsers">
      {allUsers &&
        allUsers.map((user) => (
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

export default AllUsers;

// `${user.name.title} ${user.name.first} ${user.name.last}`
// const name = `${user.name.title} ${user.name.first} ${user.name.last}`;

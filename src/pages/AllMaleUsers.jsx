import { useEffect, useState } from 'react';
import './allusers.css';

const AllMaleUsers = () => {
  const [maleUsers, setMaleUsers] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://randomuser.me/api/?gender=male&results=100'
        );
        const data = await response.json();
        setMaleUsers(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  console.log(maleUsers);

  if (loading) {
    return <h1 className="center-loading">Loading...</h1>;
  }

  return (
    <div className="allUsers">
      {maleUsers &&
        maleUsers.map((user) => (
          <ol key={user.login.uuid} className="list">
            <li>{`${user.name.title} ${user.name.first} ${user.name.last}`}</li>
          </ol>
        ))}
    </div>
  );
};

export default AllMaleUsers;

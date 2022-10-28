import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './users.css';

export const ListedUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://randomuser.me/api/?results=100');
        const data = await response.json();
        setUsers(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const numberPerPage = 10;
  const totalUsers = users.length;
  const pages = Math.ceil(totalUsers / numberPerPage);
  const skip = page * numberPerPage - numberPerPage;

  if (loading) {
    return <h1 className="center-loading">Loading...</h1>;
  }

  return (
    <div>
      <div>
        {users.slice(skip, skip + numberPerPage).map((user) => (
          <main key={user.login.uuid}>
            <div className="cont">
              <div className="flex">
                <img
                  src={user.picture.medium}
                  alt="profile"
                  className="profile"
                />
                <h3>{user.name.first}</h3>
              </div>
            </div>
            <div className="age-container text-align-right">{user.dob.age}</div>
            <div className="gender-container text-align-right">
              {user.gender}
            </div>
            <div className="email-container text-align-right no-mobile">
              {user.email}
            </div>
            <div className="country-container text-align-right no-mobile">
              {user.location.country}
            </div>
          </main>
        ))}
      </div>
      <div className="paginate-btn">
        {
          <button
            onClick={() => setPage((prev) => prev - 1)}
            className="prev"
            disabled={page <= 1}
            aria-disabled={page <= 1}
          >
            Previous
          </button>
        }
        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (each) => (
            <button className="paginate-btn-num" onClick={() => setPage(each)}>
              {each}
            </button>
          )
        )}
        {
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="next"
            disabled={page >= pages}
            aria-disabled={page >= pages}
          >
            Next
          </button>
        }
      </div>
    </div>
  );
};

const Users = () => {
  return (
    <div>
      <h1 className="center-h1">Below is a list of our users.</h1>
      <div className="headings">
        <h3>Name</h3>
        <h3>Age</h3>
        <h3>Gender</h3>
        <h3 className="no-mobile">Email Address</h3>
        <h3 className="no-mobile">Country</h3>
      </div>
      <ListedUsers />
      <div>
        <div className="users">
          <div className="usersNav">
            <Link to="/users/all">All</Link>
            <Link to="/users/male">Male</Link>
            <Link to="/users/female">Female</Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Users;

import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import './users.css';

export const MoreDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>More user details {id}</h1>
    </div>
  );
};

// const Pagination = ({ usersPerPage, totalusers, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalusers / usersPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination">
//         {pageNumbers.map((number) => (
//           <li key={number} className="page-item">
//             <a onClick={() => paginate(number)} href="!#" className="page-link">
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

export const ListedUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        setUsers(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

  const navigateHome = useNavigate();

  const goHome = () => {
    navigateHome('/moreinfo');
  };

  if (loading) {
    return <h1 className="center-loading">Loading...</h1>;
  }

  return (
    <div>
      {currentUser &&
        currentUser.map((current) => (
          <Link to={`/users/${current.login.uuid}`} onClick={goHome}>
            <main key={current.login.uuid}>
              <div className="cont">
                <div className="flex">
                  <img
                    src={current.picture.medium}
                    alt="profile"
                    className="profile"
                  />
                  <h3>{current.name.first}</h3>
                </div>
              </div>
              <div className="age-container text-align-right">
                {current.dob.age}
              </div>
              <div className="gender-container text-align-right">
                {current.gender}
              </div>
              <div className="email-container text-align-right no-mobile">
                {current.email}
              </div>
              <div className="country-container text-align-right no-mobile">
                {current.location.country}
              </div>
            </main>
          </Link>
        ))}
    </div>
  );
};

const Users = () => {
  const handlePageClick = (data) => {
    console.log(data.selected);
  };
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
      {/* <Pagination /> */}
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        pageCount={10}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'previous'}
        nextClassName={'next'}
        breakClassName={'break'}
      />
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

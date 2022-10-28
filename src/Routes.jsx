import { Routes, Route } from 'react-router-dom';
import AllUsers from './pages/All';
import AllFemaleUsers from './pages/AllFemaleUsers';
import AllMaleUsers from './pages/AllMaleUsers';
import Error from './pages/Error';
import Home from './pages/Home';
import Users, { MoreDetails } from './pages/Users';
import Test from './Test';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />}>
        <Route path="/users/:id" element={<MoreDetails />} />
        <Route path="all" element={<AllUsers />} />
        <Route path="female" element={<AllFemaleUsers />} />
        <Route path="male" element={<AllMaleUsers />} />
      </Route>
      <Route path="/moreinfo" element={<MoreDetails />} />
      <Route path="/test" element={<Test testName="bomb" />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routing;

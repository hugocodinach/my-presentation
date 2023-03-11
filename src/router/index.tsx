import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '../screens';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
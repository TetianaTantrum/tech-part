import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { Layout } from '../pages/Layout';
import Tweets from '../pages/Tweets';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

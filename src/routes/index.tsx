import { Route, Routes } from 'react-router-dom';
import { CarouselPage, MainPage, ScrollAnimationPage } from '../pages';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/carousel' element={<CarouselPage />} />
      <Route path='/scroll' element={<ScrollAnimationPage />} />
    </Routes>
  );
}

export default Router;

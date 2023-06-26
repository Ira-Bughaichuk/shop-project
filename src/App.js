import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllMenuThunk } from "./redux/shop/shopThunk";
import Loader from "./components/Loader/Loader";

import Header from "./components/Header/Header";
const MenuManagerPage = lazy(() => import("./pages/MenuManagerPage/MenuManagerPage.jsx"));
const MenuByCategory = lazy(() => import("./components/MenuByCategory/MenuByCategory"));
const MenuAllList = lazy(() => import("./components/MenuAllList/MenuAllList"));

const BasketPage = lazy(() =>import("./pages/BasketPage/BasketPage.jsx"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMenuThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/shop" element={<MenuManagerPage />}>
            <Route path="/shop/all" element={<MenuAllList />} />
            <Route path="/shop/:category" element={<MenuByCategory />} />
          </Route>

          <Route path="/shoppingCart" element={<BasketPage />} />
          <Route path="*" element={<Navigate to="/shop" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

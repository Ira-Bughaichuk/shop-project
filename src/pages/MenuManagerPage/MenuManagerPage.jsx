import React, { useEffect, Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom/dist";
import CategorySideBar from "../../components/CategorySideBar/CategorySideBar";
import Loader from "../../components/Loader/Loader";
import s from "./MenuManagerPage.module.scss";

function MenuManagerPage() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/shop") {
      navigate("/shop/all");
    }
  }, [location, navigate]);

  return (
    <div className={s.containerPage}>
      <CategorySideBar />
      <Suspense fallback={<Loader />}>
        <div className={s.containerMain}>
          <Outlet onClick={(e) => e.stopPropagation()} />
        </div>
      </Suspense>
    </div>
  );
}

export default MenuManagerPage;

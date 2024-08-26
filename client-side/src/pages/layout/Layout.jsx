import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LoadingAnim from "./LoadingAnim";

function Layout() {
  const [loadingAnim, setLoadingAnim] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setTimeout(() => {
        setLoadingAnim(false);
        setIsFirstRender(false);
      }, 1500);
    } else {
      setLoadingAnim(false);
    }
  }, []);

  return (
    <>
      {loadingAnim && isFirstRender && <LoadingAnim />}

      <main>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

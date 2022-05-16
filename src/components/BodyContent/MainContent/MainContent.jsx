import { Route, Routes } from "react-router-dom";
import Styles from "./MainContent.module.scss";

export const MainContent = () => {
  return (
    <div className={Styles.content_magazine}>
      <Routes>
        <Route path="/home/main" element={<div>MAIN</div>} />
        <Route path="/home/women" element={<div>WOMEN</div>} />
        <Route path="/home/men" element={<div>MEN</div>} />
        <Route path="/home/best" element={<div>BEST SELLER</div>} />
        <Route path="/home/about" element={<div>About us</div>} />
        <Route path="/home/likes" element={<div>LIKES</div>} />
        <Route path="/home/basket" element={<div>BASKET</div>} />
        <Route path="/home/likes" element={<div>LIKES</div>} />
      </Routes>
    </div>
  );
};

import { Route, Routes } from "react-router-dom";
import Styles from "./MainContent.module.scss";

export const MainContent = () => {
  return (
    <div>
      <div></div>
      <div>
        <Routes>
          <Route path="/about">
            <>About</>
          </Route>
          <Route path="/users">
            <> User</>
          </Route>
          <Route path="/">
            <>Main Page</>
          </Route>
        </Routes>
      </div>
    </div>
  );
};

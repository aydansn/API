import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleAlbum from "./components/SingleAlbum/SingleAlbum";
import SinglePhoto from "./components/SinglePhoto/SinglePhoto";
import SingleTodo from "./components/SingleTodo/SingleTodo";
import SingleComment from "./components/SingleComment/SingleComment";
import SingleUser from "./components/SingleUser/SingleUser";
import SinglePost from "./components/SinglePost/SinglePost";
import SingleProduct from "./components/SingleProduct/SingleProduct";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/singlealbum" element={<SingleAlbum />} />
          <Route path="/singlephoto" element={<SinglePhoto />} />
          <Route path="/singletodo" element={<SingleTodo />} />
          <Route path="/singlecomment" element={<SingleComment />} />
          <Route path="/singleuser" element={<SingleUser />} />
          <Route path="/singlepost" element={<SinglePost />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AlbumsProvider } from "./contexts/AlbumsContext.jsx";
import { PhotosProvider } from "./contexts/PhotosContext.jsx";
import { TodoProvider } from "./contexts/TodosContext.jsx";
import { CommentsProvider } from "./contexts/CommentsContext.jsx";

import { UserProvider } from "./contexts/UsersContext.jsx";
import { PostProvider } from "./contexts/PostsContext.jsx";
import { ProductProvider } from "./contexts/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <AlbumsProvider>
    <PhotosProvider>
      <TodoProvider>
        <CommentsProvider>
          <UserProvider>
            <PostProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </PostProvider>
          </UserProvider>
        </CommentsProvider>
      </TodoProvider>
    </PhotosProvider>
  </AlbumsProvider>
);

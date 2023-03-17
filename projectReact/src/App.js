import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomNavbar from "./components/CustomNavBar";
import ReduxComponent from "./Redux/ReduxComponent";
import ReduxToolkitComponent from "./ReduxToolkit/ReduxComponent";

const Home = lazy(() => import("./components/Home"));
const UpdateProduct = lazy(() => import("./components/UpdateProduct"));

const ProductDetails = lazy(() => import("./components/ProductDetails"));
const AddProduct = lazy(() => import("./components/addProduct"));
const Products = lazy(() => import("./components/Products"));
const ProductLayout = lazy(() => import("./components/ProductLayout"));
const NotFound = lazy(() => import("./components/NotFound"));
const Cart = lazy(() => import("./components/cart"));
function App() {
  return (
    // <Fragement>
    <>
      {/* <Products/> */}
      <Suspense fallback={<h1>Loaading ....</h1>}>
        <CustomNavbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/redux" element={<ReduxComponent />} />
          <Route path="/reduxtoolkit" element={<ReduxToolkitComponent />} />

          <Route path="/home/:username" element={<Home />} />
          <Route path="/products" element={<ProductLayout />}>
            <Route path="list" element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="update/:id" element={<UpdateProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </>
    // </Fragement>
  );
}

export default App;
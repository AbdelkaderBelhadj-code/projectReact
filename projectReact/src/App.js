import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import React, { Suspense, useState } from "react";
import {data }from "./product"

const Products = React.lazy(() => import("./components/Products"));
const ProductDetails = React.lazy(() => import("./components/ProductDetails"));
const NotFound = React.lazy(() => import("./components/NotFound"));

function App() {
  const [product, setProduct] = useState(data);

  return (
    <>
      <Suspense fallback={<p>loading 1 2 3 . . . </p>}>
        <NavigationBar />
        <Routes>
          <Route path="/">
            <Route index element={<Products product={product} />} />
            <Route path=":id" element={<ProductDetails product={product} />} />
          </Route>
          <Route path="product">
            <Route index element={<Products product={product} />} />
            <Route path=":id" element={<ProductDetails product={product} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/addProduct';
import CustomNavbar from './components/CustomNavBar';


const Home = lazy(()=>import('./components/Home'));
const ProductDetails = lazy(()=>import('./components/ProductDetails'));

const Products = lazy(()=>import('./components/Products'));
const ProductLayout = lazy(()=>import('./components/ProductLayout'));
const NotFound = lazy(()=>import('./components/NotFound'));


function App() {
 
  return (
    // <Fragement>
    <>
  
    {/* <Products/> */}
    <Suspense fallback={<h1>Loaading ....</h1>}>
    <CustomNavbar/>
    <Routes>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/" element={<h1>Home</h1>}/> 
      <Route path="/home/:username" element={<Home/>}/> 
      <Route path="/products" element={<ProductLayout />}>
          <Route index element={<Products />}/>
          <Route path="add" element={<AddProduct />}/>
          <Route path=":name" element={<ProductDetails/>}/>
      </Route>
    </Routes>
    </Suspense>
    </>
    // </Fragement>
  );
}

export default App;

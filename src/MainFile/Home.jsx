import Header from "../Pages/Header";
import Navbar from "../Pages/Navbar";
import Product from "../Pages/Product";
import Companies from "../Pages/Companies";
import Community from "../Pages/Community";
import Footer from "../Pages/Footer";
import ProductsMap from "../Pages/ProductsMap";

function Home() {
  return (
    <div className="W-full min-h-screen  overflow-x-hidden">
      <Header />
      <Navbar />
      <Product />  
      <ProductsMap />
      <Companies />
      <Community />
      <Footer />
    </div>
  );
}

export default Home;

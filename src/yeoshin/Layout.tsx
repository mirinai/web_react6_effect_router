import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div>0</div>
      <div>0</div>
      <div>0</div>
      <div>------------!!---------------</div>
      <Header />
      <main className="w-full m-auto max-w-3xl">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;

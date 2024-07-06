import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
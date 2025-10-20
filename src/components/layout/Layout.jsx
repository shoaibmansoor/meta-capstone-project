import Header from "./Header/Header";
import Footer from "./Footer/Footer";
const navLinks = [
  {
    name: "Home",
    path: "/#home",
    hashLink: true,
  },
  {
    name: "About",
    path: "/#about",
    hashLink: true,
  },
  {
    name: "Menu",
    path: "/#menu",
    hashLink: true,
  },
  {
    name: "Reservations",
    path: "/reservations",
    hashLink: false,
  },
  {
    name: "Order Online",
    path: "/orderOnline",
    hashLink: false,
  },
  {
    name: "Login",
    path: "/login",
    hashLink: false,
  },
];

const Layout = ({ children }) => {
  return (
    <>
      <Header navLinks={navLinks} />
      <main id="home" role="main">{children}</main>
      <Footer navLinks={navLinks} />
    </>
  );
};

export default Layout;

import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/App.css";

const Layout = ({ children }) => (
  <div className="fullheight">
    <Navigation />
    <Container>{children}</Container>
    <Footer />
  </div>
);

export default Layout;

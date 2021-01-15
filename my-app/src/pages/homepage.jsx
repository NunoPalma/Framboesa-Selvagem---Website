import 'bootstrap/dist/css/bootstrap.css';
import '../styles/homepage.css';
import Insta from "../pages/insta.jsx"
import Header from "../layouts/header.jsx"

const HomePage = () => {

  return (
    <section>
    <Header></Header>
    <Insta></Insta>
    </section>
  )
};

export default HomePage;

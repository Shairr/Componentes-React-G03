import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import MenuItem from "./components/MenuItem.jsx";

const menuItem = {
  id: 1,
  iceCream: {
      id: 3,
      name: "Mora silvestre",
      imagePath: "/images/mora.svg", 
  },
  price: 1.5,
  desciprtion: "Mora de Ambato",
  inStock: true,
};

const App = () => {
  return(
  <>
    <main>
      <Header />
      <Menu>
        <MenuItem menuItem={menuItem} />
      </Menu>
    </main> 
    <Footer />
  </>
  );
};
export default App;
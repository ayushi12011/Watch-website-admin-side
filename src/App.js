import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Header from "./Compo/Header";
import Index from "./Pages/Index";
import Footer from "./Compo/Footer";
import Add_category from "./Pages/Add_category";
import Manage_category from "./Pages/Manage_category";
import Add_product from "./Pages/Add_product";
import Manage_product from "./Pages/Manage_product";
import Manage_user from "./Pages/Manage_user";
import Add_blog from "./Pages/Add_blog";
import Manage_contact from "./Pages/Manage_contact";
import Manage_blog from "./Pages/Manage_blog";
import Edit_category from "./Pages/Edit_category";
import Edit_product from "./Pages/Edit_product";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Login/> </>}></Route>
          <Route path="/Index" element={<> <Header/> <Index/> <Footer/>  </>}></Route>

          <Route path="/Add_category" element={<> <Header/> <Add_category/> <Footer/>  </>}></Route>
          <Route path="/Manage_category" element={<> <Header/> <Manage_category/> <Footer/>  </>}></Route>

          <Route path="/Add_product" element={<> <Header/> <Add_product/> <Footer/>  </>}></Route>
          <Route path="/Manage_product" element={<> <Header/> <Manage_product/> <Footer/>  </>}></Route>

          <Route path="/Manage_user" element={<> <Header/> <Manage_user/> <Footer/>  </>}></Route>

          <Route path="/manage_contact" element={<> <Header/> <Manage_contact/> <Footer/>  </>}></Route>

          <Route path="/add_blog" element={<> <Header/> <Add_blog/> <Footer/>  </>}></Route>
          <Route path="/manage_blog" element={<> <Header/> <Manage_blog/> <Footer/>  </>}></Route>

          <Route path="/edit_category/:id" element={<> <Header/> <Edit_category/> <Footer/>  </>}></Route>
          <Route path="/edit_product/:id" element={<> <Header/> <Edit_product/> <Footer/>  </>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

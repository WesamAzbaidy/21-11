import Navbar from "./comopnent/Navbar";
// import ProductListCard from "./comopnent/ProductListCard";
// import ContactUs from "./comopnent/ContactUs";
import ProudectListCardMUI from "./comopnent/ProudectListCardMUI";
import { Route, Routes } from "react-router-dom";
import ContactUsMUI from "./comopnent/ContactUsMUI";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* <ProductListCard /> */}
              <ProudectListCardMUI />
            </div>
          }
        />
        <Route path="contactUs" element={<ContactUsMUI />} />
      </Routes>
    </div>
  );
}

export default App;

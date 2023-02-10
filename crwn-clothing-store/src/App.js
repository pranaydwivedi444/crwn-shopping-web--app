import Home from "./routes/homes/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Signin from "./routes/sign-in/sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<Signin />} />
      </Route>
    </Routes>
  );
}

export default App;

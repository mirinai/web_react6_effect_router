("./Category/Tabs");
import CategoryButton from "./Category/CategoryButton";
import Counter from "./musinsa/Counter";
import Tabs from "./Category/Tabs";
import Snapshot from "./Snapshot";
import Effect from "./Effect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Musinsa from "./musinsa/Musinsa";

import Home from "./Home";
import Product from "./Product";
import Yeoshin from "./yeoshin/Yeoshin";
import Layout from "./yeoshin/Layout";

function App() {
  return (
    <div className="App">
      <Layout />
      <div>-------------------------</div>
      <Yeoshin />
      <div>-------------------------</div>

      <BrowserRouter>
        <Routes>
          <Route path="" Component={Home}></Route>
          <Route path="/Category" Component={Tabs}></Route>
          <Route path="/musinsa" Component={Musinsa}></Route>
          <Route path="/Product/:abc" Component={Product}></Route>
        </Routes>
      </BrowserRouter>

      <div>-------------------------</div>

      <Effect />
      <div>-------------------------</div>
      <Snapshot />

      {/* <p className="text-red-600">dasfjkalsdfgjalsdfk</p>
      <p className="font-bold">asdf</p> */}
      <>
        <Tabs />
        {/* <CategoryButton image="watcha.png" title="watcha" />
        <CategoryButton image="netflix.png" title="watcha" />
        <CategoryButton image="disney.jpg" title="watcha" /> */}
      </>
      <>
        <Counter price={10000} />
        <Counter price={20000} />
        <Counter price={4000} />
      </>
      {/* <>
        <CategoryButton image="watcha.png" title="watcha" />
        <CategoryButton image="netflix.png" title="netflix" />
        <CategoryButton image="disney.jpg" title="disney" />
      </> */}
    </div>
  );
}

export default App;

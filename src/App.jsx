import "./App.css";
import "antd/dist/antd.css";
import HeaderComponent from "./components/Header";
import ComponentContent from "./components/Content/Content";
import { Layout, Menu } from "antd";
import { Route, withRouter } from "react-router-dom";

import Cart from "./components/Cart";
import WrapeBookPage from "./components/Content/CardBook/BookPage";
import Filter from "./components/Filter";

const { Header, Content, Footer } = Layout;

function App({ totalPrice, setSum, count, isLoading, profile }) {
  //console.log(count.lenght);
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderComponent
          Header={Header}
          Menu={Menu}
          totalPrice={totalPrice}
          count={count}
          setSum={setSum}
        />
        <div style={{ display: "flex" }}>
          <Route
            exact
            path="/"
            render={() => <ComponentContent Content={Content} />}
          />
          <Route path="/cart" render={() => <Cart />} />
          <Route
            path="/cartbook/:id"
            render={() => (
              <WrapeBookPage isLoading={isLoading} profile={profile} />
            )}
          />
        </div>
        <Footer className="footer" style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
/*<Route path="/cartbook/:id" render={() => <BookPage />} />*/

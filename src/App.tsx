import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menus from "./Component/Menu/Menus";
import { Layout, Menu } from "antd";
import Pannel from "./Component/Pannel";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Component/Pannel/Dashboard/Dashboard";
import ProductList from "./Component/Pannel/ProductList/ProductList";
import Help from "./Component/Pannel/Help/Help";
import Faq from "./Component/Pannel/Faq/Faq";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

function App() {
  let navigate = useNavigate();

  return (
    <Layout className="container">
      <Header style={{ backgroundColor: "white" }}>
        <div className="brand">Ounce</div>
      </Header>
      <Layout>
        <Sider theme="light">
          <Menu
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                children: [
                  {
                    label: "Dashboard",
                    key: "dashboard",
                    onClick: () => navigate("dashboard"),
                  },
                  {
                    label: "Faq",
                    key: "faq",
                    onClick: () => navigate("faq"),
                  },
                ],
              },
              {
                label: "Product List",
                key: "product_list",
                onClick: () => navigate("productlist"),
              },
            ]}
          />
        </Sider>
        <Content>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="faq" element={<Faq />} />
            <Route path="productlist" element={<ProductList />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

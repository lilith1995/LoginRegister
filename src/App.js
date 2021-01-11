import React from "react";

import Header from "./container/Header/Header";
import Layout from "./components/Layout/Layout";
import Authentication from "./container/Authentication/Authentication";
import Footer from "./container/Footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <div className="App cfb">
      <Header />
      <Layout>
        <main className="app-main-content">
          <span>
            <Authentication />
          </span>
        </main>
      </Layout>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Proposal from "./pages/Proposal";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <Container fluid>
          <Row className="">
            <Col xxl={2} xl={3} lg={3} className="p-0">
              <Sidebar />
            </Col>
            <Col xxl={10} xl={9} lg={9} className="p-0">
              <Proposal />
              {/* <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route activeClassName="selected" path="/proposal" component={Proposal} />
              </Switch> */}
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;

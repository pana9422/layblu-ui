import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./theme/Sidebar";
import Navbar from "./theme/Navbar";

import Dashboard from "./theme/Dashboard";
import Docs from "./theme/Docs";
import Icons from "./theme/Icons";
import Code from "./theme/Code";
import Components from "./theme/Components";
import Libraries from "./theme/Libraries";
import Team from "./theme/Team";
import NotFound from "./helpers/NotFound";
import SidebarProvider from "../context/SidebarProvider";
import SidebarContext from "../context/SidebarContext";

const App = () => {
    return (
        <SidebarProvider>
            <div className="app">
                <Router>
                    <SidebarContext.Consumer>
                        {context => <Sidebar toggleSidebar={context.open} />}
                    </SidebarContext.Consumer>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Dashboard />} exact />
                        <Route path="/docs" element={<Docs />} />
                        <Route path="/icons" element={<Icons />} />
                        <Route path="/components/:component" element={<Components />} />
                        <Route path="/components/:component/:codeComponent" element={<Code />} />
                        <Route path="/libraries/:library" element={<Libraries />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </div>
        </SidebarProvider>
    );
};

export default App;

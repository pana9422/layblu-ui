import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./utils/Sidebar";
import Navbar from "./utils/Navbar";

import Dashboard from "./pages/Dashboard";
import Code from "./pages/Code";
import Components from "./pages/Components";
import Libraries from "./pages/Libraries";
import Team from "./pages/Team";
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
                        <Route path="/components/:component" element={<Components />} />
                        <Route path="/components/:component/:code" element={<Code />} />
                        <Route path="/libraies/:library" element={<Libraries />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </div>
        </SidebarProvider>
    );
};

export default App;

import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Layout from "./components/Layout";
import { Container } from "@mui/material";
import Authenticate from "./components/Authenticate";
import Teams from "./components/teamandplayercrud/Teams";
import TeamPlayers from "./components/teamandplayercrud/TeamPlayers";
import AllPlayers from "./components/teamandplayercrud/AllPlayers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Authenticate />}>
          <Route path="/" element={<Layout />}>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/team/:id/players" element={<TeamPlayers />} />
            <Route path="/players" element={<AllPlayers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

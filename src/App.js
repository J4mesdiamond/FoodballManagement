import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Register/Login';
import SignUp from './Register/SignUp';
import Overview from './Pages/Overview'
import TeamMember from '././Pages/TeamMember/TeamMember'
import Players from './Pages/TeamMember/Players';
import Staff from './Pages/TeamMember/Staff'
import Account from './Pages/TeamMember/Account';
import StaffDetails from './Pages/TeamMember/StaffDetails';
import Finances from './Pages/Finances';
import LeagueDetails from './Pages/LeagueDetails';
import Active from './Pages/Active';
import Result from './Pages/Result';
import Premier from './Pages/Premier';
import UEFA from './Pages/UEFA';
import Faleague from './Pages/Faleague';
import FinancesBud from './Pages/FinancesBud';
import FinancesEarn from './Pages/FinancesEarn';



function App() {
  return (
    <Router>
      <div className="App">
        {/* <StaffDetails/> */}
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/Overview" element={<Overview />}/>
          <Route path="/TeamMember" element={<TeamMember />}/>
          <Route path="/Players" element={<Players/>}/>
          <Route path="/Staff" element={<Staff/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/StaffDetails" element={<StaffDetails/>}/>
          <Route path="/Finances" element={<Finances/>}/>
          <Route path="/LeagueDetails" element={<LeagueDetails/>}/>
          <Route path="/Active" element={<Active/>}/>
          <Route path="/Result" element={<Result/>}/>
          <Route path="/Premier" element={<Premier/>}/>
          <Route path="/UEFA" element={<UEFA/>}/>
          <Route path="/Faleague" element={<Faleague/>}/>
          <Route path="/FB" element={<FinancesBud/>}/>
          <Route path="/FE" element={<FinancesEarn/>}/>
        </Routes>
      </div>
    </Router>
  );
}
// Finances
export default App;

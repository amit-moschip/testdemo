import { BrowserRouter as Router, Routes, Route } from "react-router-dom";;
import './App.css'
import Modal from './reusable_components/Modal';
import QuestionCreationComp from './components/QuestionCreation';
import BulkQuestionCreation from './components/BulkQuestionCreation';
import SetUpNewQuiz from './components/SetUpNewQuiz';
import SideBar from './components/BaseLayOut/SideBar';
import SignUp from './pages/signup';
import Login from './pages/Login';
// import SignUpForm from './components/signupForm';
// import SignInForm from './components/SigninForm';
import Topbar from './components/BaseLayOut/Topbar';
function App() {

  return (
    <>
    {/* <Router>
      <div className="bg-black">
        <Routes> 
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin/student" element={<Login/>} />
          <Route path="/signin/instructor" element={<Login />} />
        </Routes>
      </div>
    </Router> */}

      <Topbar />
      <SideBar />
      
      <Modal component={<QuestionCreationComp />} modalHeading={"Creat Questions"} customClass={"w-[600px] h-[600px]"} />
      {/* <Modal component={<BulkQuestionCreation />} customClass={"w-[350px] h-[200px]"} modalHeading={"Upload Questions in Bulk"}/>  */}
      {/* <Modal component={<SetUpNewQuiz />} customClass={"w-[800px] h-[500px]"}  modalHeading={"Set Up a New Quiz"}/> */}
    </>
  )
}

export default App

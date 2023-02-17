import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  AboutUs,
  Benefits,
  BoardGovernance,
  BoardManagement,
  BoardMeeting,
  BoardPortal,
  ContactUs,
  DashboardPage,
  ForgotPasswordPage,
  KazitalkFaqs,
  KazitalkUni,
  KeyFeatures,
  LandingPage,
  LoginPage,
  Paperless,
  RegistrationPage,
  Resources,
  SecurityFeatures,
  UseCases,
  UserProfiles,
  VideoConferencing,
  WebcamPage,
} from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="landing-page" element={<LandingPage />} />
        <Route path="board-portal" element={<BoardPortal />} />
        <Route path="board-management" element={<BoardManagement />} />
        <Route path="board-meeting" element={<BoardMeeting />} />
        <Route path="board-governance" element={<BoardGovernance />} />
        <Route path="kazitalk-uni" element={<KazitalkUni />} />
        <Route path="use-cases" element={<UseCases />} />
        <Route path="user-profiles" element={<UserProfiles />} />
        <Route path="benefits" element={<Benefits />} />
        <Route path="paperless" element={<Paperless />} />
        <Route path="video-conferencing" element={<VideoConferencing />} />
        <Route path="key-features" element={<KeyFeatures />} />
        <Route path="security-features" element={<SecurityFeatures />} />
        <Route path="kazitalk-faqs" element={<KazitalkFaqs />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="webcam-page" element={<WebcamPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default App;

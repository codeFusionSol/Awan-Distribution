import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Vendors from "./Pages/Vendors/Vendors.jsx";
import ProfessionalServices from "./Pages/ProfessionalServices/ProfessionalServices.jsx";
import TrainingFacilities from "./Pages/TrainingFacilities/TrainingFacilities.jsx";
import Overview from "./Pages/Overview/Overview.jsx";
import President from "./Pages/President/President.jsx";
import Privacy from "./Pages/Privacy/Privacy.jsx";
import Mission from "./Pages/Mission/Mission.jsx";
import Career from "./Pages/Career/Career.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Achievement from "./Pages/Achievement/Achievement.jsx";
import AwanElKhair from "./Pages/AwanElKhair/AwanElKhair.jsx";
import AwanAcademy from "./Pages/AwanAcademy/AwanAcademy.jsx";
import SeyadaAcademy from "./Pages/SeyadaAcademy/SeyadaAcademy.jsx";
import RehabilitationCenter from "./Pages/RehabilitationCenter/RehabilitationCenter.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendors/:name" element={<Vendors />} />
          <Route path="/initiatives/achievement" element={<Achievement />} />
          <Route path="/initiatives/awan-al-khair" element={<AwanElKhair />} />
          <Route path="/initiatives/awan-academy" element={<AwanAcademy />} />
          <Route
            path="/initiatives/seyada-academy"
            element={<SeyadaAcademy />}
          />
          <Route
            path="/initiatives/rehabilitation-center"
            element={<RehabilitationCenter />}
          />
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/about/president" element={<President />} />
          <Route path="/about/privacy" element={<Privacy />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/career" element={<Career />} />
          <Route path="/about/contact" element={<Contact />} />
          <Route path="/trainingfacilities" element={<TrainingFacilities />} />
          <Route
            path="/professionalservices"
            element={<ProfessionalServices />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

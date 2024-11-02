import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import EventDisplayPage from "./EventDisplayPage";
import About from "./About";
import BookedTicketsDisplay from "./DisplayBooking";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="events" element={<EventDisplayPage />} /> {/* Corrected Component Name */}
        <Route path="about" element={<About />} />
        <Route path="/display" element={<BookedTicketsDisplay />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;

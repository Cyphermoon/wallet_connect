import { Route, Routes } from "react-router-dom";
import Default from "./pages/Default";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App font-sans  text-gray-800 font-normal antialiased box-border m-0 p-0 scroll-smooth">
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="error" element={<Error />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

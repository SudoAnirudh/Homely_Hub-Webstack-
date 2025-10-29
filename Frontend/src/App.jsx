import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Welcome to Homely Hub</h1>
      <p>Start exploring properties and bookings.</p>
    </main>
  );
}

function NotFound() {
  return (
    <main style={{ padding: "2rem" }}>
      <h2>Page not found</h2>
      <p>
        Go back to <Link to="/">Home</Link>
      </p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header style={{ padding: "1rem", borderBottom: "1px solid #eee" }}>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link to="/">Home</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer style={{ padding: "1rem", borderTop: "1px solid #eee" }}>
          <small>© {new Date().getFullYear()} Homely Hub</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

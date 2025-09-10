import Search from "./components/Search";
import React, { useState, useEffect } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {}, []);
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <h1>
            Find <span className="text-gradient">Moives</span> with your Heart
          </h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {/* <h1 className="text-white text-3xl">{searchTerm}</h1> */}
        </header>

        <section className="all-movies">
          <h2>All Movies</h2>
        </section>
      </div>
    </main>
  );
};

export default App;

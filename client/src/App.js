import Axios from "axios"
import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import "tailwindcss/tailwind.css"

export default function App() {
  const [url, setUrl] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await Axios.post("/url", { url });
    setLink(`http://localhost:5050/${data.short}`);
  }

  return (
    <div className="flex flex-col justify-between" style={{ height: "100vh" }}>
      <div className="flex justify-center items-center flex-col p-5">
        <h1 className="text-5xl mb-7">URL shortener</h1>
        <form onSubmit={handleSubmit} className="w-full flex justify-center items-center">
          <input
            type="text" value={url}
            placeholder="Enter the url"
            onChange={e => setUrl(e.target.value)}
            className="border-2 rounded py-1 px-3 mx-1 w-1/2"
          />
          <button type="submit" className="bg-purple-400 py-1 px-3 text-white rounded border border-purple-400">Shorten</button>
        </form>
        <div>
          <h1 className="text-3xl mt-10">
            URL:
            <a href={link} className="text-blue-500 mx-5">{link}</a>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
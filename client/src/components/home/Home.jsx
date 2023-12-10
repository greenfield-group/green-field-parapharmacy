import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [hoveredArticle, setHoveredArticle] = useState(null);

  useEffect(() => {
    getData();
  }, [search]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/home/get");
      setArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const filtered = articles.filter((ele) =>
      ele.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArticles(filtered);
  }, [search, articles]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 flex-grow">
        <div className="flex items-center mb-4">
          <img
            src="https://t3.ftcdn.net/jpg/01/37/10/80/360_F_137108048_YrdgsHsMeEX8QYmFSbtR3YrtYsvBFoWe.jpg"
            alt="Logo"
            className="w-16"
          />
          <input
            type="search"
            id="search"
            placeholder="Search"
            required
            className="p-2 border rounded-md"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="images">
          <img
            src="https://parapharmacie.tn/wp-content/uploads/elementor/thumbs/12-3-pwxjloyt8wfnchdetgf8inmxk7x3t5tbdwe8ibgagu.png"
            alt="Image 1"
          />
          <h1 className="text-2xl font-semibold mb-2">NEWS</h1>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredArticles.map((ele, i) => (
            <div
              key={i}
              className="relative bg-white p-4 rounded-md shadow-md overflow-hidden"
              onMouseEnter={() => setHoveredArticle(i)}
              onMouseLeave={() => setHoveredArticle(null)}
            >
              <img
                src={ele.image}
                className="w-full h-25 object-cover mb-4 rounded-md cursor-pointer"
                alt={`Article ${i}`}
              />
              <h2 className="text-2xl font-semibold mb-2">{ele.title}</h2>
              <h2  className="text-2xl font-semibold mb-2">{ele.price} DT</h2>
              {hoveredArticle === i && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p>{ele.description}</p>
                    <h1>{ele.category}</h1>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <img
        src="https://parapharmacie.tn/wp-content/uploads/elementor/thumbs/9-4-pwxjlvjokqonlr3ur19mi3z5px0ob1jfqsymv96j9a.png"
        alt="Image 3"
      />

      <footer className="bg-gray-800 text-white p-10 text-center">
        &copy; 2023 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;

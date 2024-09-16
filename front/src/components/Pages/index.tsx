"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

interface Blog {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []); 

  return (
    <div className="container mx-auto px-10">
      <h1 className="text-5xl text-center my-20">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <NewsCard
            key={blog.id}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            imageSrc={blog?.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

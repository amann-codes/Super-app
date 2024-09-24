import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsCard = () => {
  const [article, setArticle] = useState({
    picture: "",
    time: "",
    content: "",
    title: "",
  });
  const apiKey = import.meta.env.VITE_API_NEWS_KEY;

  useEffect(() => {
    async function fetchNews() {

        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&from=2024-08-24&sortBy=publishedAt&apiKey=${apiKey}`
        );
        const article = response.data.articles[2];
        setArticle({
          picture: article.urlToImage,
          time: article.publishedAt,
          content: article.content,
          title: article.title,
        });
 
      }
      
    
    fetchNews();
  }, [apiKey]);

  return (
    <div className="flex flex-col w-[250px] h-[438px] rounded-xl bg-white overflow-hidden">
      <div className="relative h-[300px]">
        <img src={article.picture} className="w-full h-full object-cover" alt="News Article" />
        <div className="absolute bottom-0 bg-black bg-opacity-75 flex flex-col justify-center px-3 py-2">
          <h2 className="text-white text-base font-bold mb-1">{article.title}</h2>
          <p className="text-white text-sm">
            {new Date(article.time).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="p-3">
        <p className="text-black text-sm line-clamp-5">{article.content}</p>
      </div>
    </div>
  );
};

export default NewsCard;

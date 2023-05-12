import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "../NewsItem";

import axios from "axios";
const NewsItemBlock = styled.div`
    border: 1px solid #000;
    padding-bottom: 3rem;
    width: 768px:
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        wdith: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;
const Lodingbar = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 30px;
  transform: translate(-50%, -50%);
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(null);
  console.log(articles);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a552bd21cf964e1882427e73cdc95fd8
          `
        );
        console.log(response.data.articles);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  if (loading) {
    return <Lodingbar>로딩 중입니다...</Lodingbar>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsItemBlock>
      {articles.map((v) => (
        <NewsItem key={v.url} article={v} />
      ))}
    </NewsItemBlock>
  );
};

export default NewsList;

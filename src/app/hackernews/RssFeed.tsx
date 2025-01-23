"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const HACKERNEWS_API_ENDP = new URL("http://localhost:3000/api/hackernews");

interface newsItem {
  title: string;
  description: string;
  link: string;
  guid: string;
  pubDate: string;
  author: string;
  enclosure: string;
}

interface rssFeed {
  title: string;
  link: string;
  description: string;
  items: newsItem[];
}

export default function HackerNewsRssFeed() {
  const [rssFeed, setRssFeed] = useState<rssFeed | object>({});

  const getRSSFeed = async () => {
    const rssFeed = await fetch(HACKERNEWS_API_ENDP)
      .then((resp) => resp.json())
      .then((json) => json)
      .catch((err) => err);
    return rssFeed;
  };
  useEffect(() => {
    const fetchData = async () => {
      const rssFeed = await getRSSFeed();
      setRssFeed(rssFeed);
    };
    fetchData();
  }, []);

  if (Object.keys(rssFeed).length === 0) {
    return <div>Not Found</div>;
  }
  console.log(rssFeed);

  return (
    <div>
      <Link
        href={(rssFeed as rssFeed).link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {(rssFeed as rssFeed).title}
      </Link>
      <p>{(rssFeed as rssFeed).description}</p>
      {(rssFeed as rssFeed).items.map((item, index) => {
        return (
          <div key={index}>
            <br />
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <h1 className="font-semibold">{item.title}</h1>
            </Link>
            <p>{item.description}</p>
            <p>{item.author}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const HACKERNEWS_API_ENDP = new URL("http://localhost:3000/api/hackernews");

interface newsItem {
  title: string;
  description: string;
  link: string;
  guid: string;
  pubDate: string;
  author: string;
  enclosure: {
    length: string;
    type: string;
    url: string;
  };
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

  return (
    <div className="">
      <div className="">
        <Link
          className="flex flex-col items-center justify-center "
          href={(rssFeed as rssFeed).link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-8xl p-10 text-center">
            {(rssFeed as rssFeed).title}
          </h1>
          <p className="mb-6 text-lg">{(rssFeed as rssFeed).description}</p>
        </Link>
      </div>

      {(rssFeed as rssFeed).items.map((item, index) => {
        return (
          <div key={item.guid + index} className="grid grid-cols-[1fr_1fr] m-6">
            <div className={`p-6 ${index % 2 === 0 ? "order-1":"order-2"}`}>
              <Link className="" href={item.link} target="_blank" rel="noopener noreferrer">
                <h1 className="text-2xl font-semibold text-center m-2">{item.title}</h1>
              </Link>
                <h3 className="text-lg font-semibold text-center mb-3">{item.author}</h3>
              <p>{item.description}</p>
            </div>
            
            <div className={`flex items-center justify-center ${index % 2 === 0 ? "order-2":"order-1"}`}>
              <Image
                className=""
                src={item.enclosure.url}
                alt={item.title}
                width={612}
                height={612}
                unoptimized
              />
              
            </div>
          </div>
        );
      })}
    </div>
  );
}

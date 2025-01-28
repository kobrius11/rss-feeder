"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RssFeedContainer from "@/app/components/containers/RssFeedContainer";
import { BASE_URL } from "@/app/lib/settings";

const FIVETHIRTYEIGHT_API_ENDP = new URL("/api/fivethirtyeight", BASE_URL);

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

export default function FiveThrityEightRssFeed() {
  const [rssFeed, setRssFeed] = useState<rssFeed | object>({});
  const [isLoading, setLoading] = useState(true);

  const fetchRssFeed = async () => {
    const rssFeed = await fetch(FIVETHIRTYEIGHT_API_ENDP)
      .then((resp) => resp.json())
      .then((json) => json)
      .catch((err) => err);
    setLoading(false);
    return rssFeed;
  };

  useEffect(() => {
    const fetchData = async () => {
      const rssFeed = await fetchRssFeed();
      setRssFeed(rssFeed);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
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
          <p className="mb-6 text-lg text-center">{(rssFeed as rssFeed).description}</p>
        </Link>
      </div>

      {(rssFeed as rssFeed).items.map((item, index) => {
        return (
          <RssFeedContainer
            key={item.guid + index}
          >
            <div
              className={`
                p-6 
                ${index % 2 === 0 ? "md:order-1" : "md:order-2"}
                row-start-2
                md:row-start-auto`}
            >
              <Link
                className=""
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-2xl font-semibold text-center m-2">
                  {item.title}
                </h1>
              </Link>
              <h3 className="text-lg font-semibold text-center mb-3">
                {item.author}
              </h3>
              <p>{item.description}</p>
            </div>

            <div
              className={`flex items-center justify-center ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"}
                row-start-1 
                md:row-start-auto
              `}
            >
            </div>
          </RssFeedContainer>
        );
      })}
    </div>
  );

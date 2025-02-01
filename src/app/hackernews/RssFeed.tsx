"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/app/lib/settings";
import FadeInSection from "@/app/components/FadeInSection";
import { rssFeed } from "./interfaces";
import HackerNewsCard from "./NewsCard";

const HACKERNEWS_API_ENDP = new URL("/api/hackernews", BASE_URL);

export default function HackerNewsRssFeed() {
  const [rssFeed, setRssFeed] = useState<rssFeed | object>({});
  const [isLoading, setLoading] = useState(true);

  const getRSSFeed = async () => {
    const rssFeed = await fetch(HACKERNEWS_API_ENDP)
      .then((resp) => resp.json())
      .then((json) => json)
      .catch((err) => err);
    setLoading(false);
    return rssFeed;
  };
  useEffect(() => {
    const fetchData = async () => {
      const rssFeed = await getRSSFeed();
      setRssFeed(rssFeed);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (Object.keys(rssFeed).length === 0) {
    return <div>Not Found</div>;
  }

  return (
    <div className="">
      <FadeInSection>
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
            <p className="mb-6 text-lg text-center">
              {(rssFeed as rssFeed).description}
            </p>
          </Link>
        </div>
      </FadeInSection>

      {(rssFeed as rssFeed).items.map((item, index) => {
        return (
          <HackerNewsCard key={item.guid + index} index={index} item={item} />
        );
      })}
    </div>
  );
}

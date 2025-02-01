"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RssFeedContainer from "@/app/components/containers/RssFeedContainer";
import { newsItem } from "./interfaces";
import FadeInSection from "@/app/components/FadeInSection";

interface HackerNewsCardProps {
    item: newsItem;
    index: number;
}

export default function HackerNewsCard({ item, index }: HackerNewsCardProps) {
    const [ likeCounter, setLikeCounter ] = useState(0);
    const [ comments, setComment ] = useState<string[]>([]);

    return (
      <FadeInSection>
        <RssFeedContainer>
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

              <div className="flex flex-row justify-center p-4 m-1">
                <button
                    onClick={() => setLikeCounter(likeCounter +1)}
                    className="flex flex-row justify-center items-center" 
                >
                  <p
                    className="text-lg"
                  >{likeCounter}</p> 
                <Image
                  className="dark:invert hover:scale-125 transform transition-transform"
                  src={"socials/like-button.svg"}
                  alt={"Like Button image"}
                  width={24}
                  height={24}
                />
                </button>
                <button
                    onChange={() => setComment(comments.push())}
                    className="flex flex-row justify-center items-center" 
                >
                  <p
                    className="text-lg"
                  >{likeCounter}</p> 
                <Image
                  className="dark:invert hover:scale-125 transform transition-transform"
                  src={"socials/comment-button.svg"}
                  alt={"comment Button image"}
                  width={24}
                  height={24}
                />
                </button>

              </div>
            </div>

            <div
              className={`flex items-center justify-center ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"}
                row-start-1 
                md:row-start-auto
              `}
            >
              <Image
                className=""
                src={item.enclosure.url}
                alt={item.title}
                width={612}
                height={612}
              />
            </div>
          </RssFeedContainer>
          </FadeInSection>
    );
}
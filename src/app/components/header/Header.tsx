import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="grid grid-cols-[1.5fr_3fr_1fr] mx-6 gap-6 min-h-20">
        <Link href="/" className="flex flex-col md:flex-row items-center justify-center text-nowrap">
          <Image
            src="/iconmonstr-rss-feed-2.svg"
            alt="credits: https://iconmonstr.com/rss-feed-2-svg/"
            width={40}
            height={40}
            className="dark:invert rounded mx-3"
          />
          <h1 className="uppercase md:text-2xl text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500">
            RSS-Feeder app
          </h1>
        </Link>

      <nav className="">
        <ul className="flex flex-col md:flex-row items-center justify-center text-nowrap min-h-20">
          <li className="mx-3">
            <Link className="uppercase " href="/hackernews">HackerNews</Link>
          </li>
          <li className="mx-3">
            <Link className="uppercase " href="/fivethirtyeight">FiveThirtyEight</Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}

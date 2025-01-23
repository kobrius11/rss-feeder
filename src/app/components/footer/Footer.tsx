import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid grid-cols-[2fr_2fr_2fr] min-h-64 bg-zinc-900">
      <div className="flex flex-col items-center justify-center">
        <p>{"Made with Love <3"}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>{"Made with NextJS15"}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <nav>
          <ul>
            <li>
              <Link
                className="m-3"
                href="https://www.linkedin.com/in/software-developer-zygimantas-bickus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                className="m-3"
                href="https://github.com/kobrius11"
                target="_blank"
                rel="noopener noreferrer"
              >
                GIT
              </Link>
              <Link
                className="m-3"
                href="https://www.facebook.com/profile.php?id=61559681161626"
                target="_blank"
                rel="noopener noreferrer"
              >
                FB
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

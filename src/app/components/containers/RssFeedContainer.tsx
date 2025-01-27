interface RssFeedContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function RssFeedContainer({ children, className }: RssFeedContainerProps) {
  return (
    <div
      className={`grid md:grid-cols-[1fr_1fr] md:grid-rows-none md:m-6 grid-rows-[1fr_1fr] ${className}`}
    >
        { children }
    </div>
  );
}

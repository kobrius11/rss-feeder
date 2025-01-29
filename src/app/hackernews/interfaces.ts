export interface newsItem {
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

export interface rssFeed {
  title: string;
  link: string;
  description: string;
  items: newsItem[];
}
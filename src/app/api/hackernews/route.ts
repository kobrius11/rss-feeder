import { XMLParser } from "fast-xml-parser";
import {
  HACKERNEWS_URL,
  RESPONSE_OK,
  createErrResponse,
} from "@/app/api/common";

export async function GET() {
  const rssFeed = await fetch(HACKERNEWS_URL)
    .then((resp) => resp.text())
    .then((text) => {
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: ''
      });
      const doc = parser.parse(text);
      return doc;
    })
    .catch((err) => {
      return Response.json(createErrResponse(err), { status: err.status });
    });

  return Response.json(
    {
      title: rssFeed.rss.channel.title,
      link: rssFeed.rss.channel.link,
      description: rssFeed.rss.channel.description,
      items: rssFeed.rss.channel.item,
    },
    RESPONSE_OK
  );
}

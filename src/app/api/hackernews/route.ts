export const dynamic = "force-static";

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
      const parser = new XMLParser();
      const doc = parser.parse(text);
      return doc;
    })
    .catch((err) => {
      return Response.json(createErrResponse(err), { status: err.status });
    });

  return Response.json(rssFeed, RESPONSE_OK);
}

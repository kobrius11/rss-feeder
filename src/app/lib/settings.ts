
const isProd = process.env.NODE_ENV === 'production';
export const BASE_URL = isProd ? "https://rss-feeder-kobrius11s-projects.vercel.app" : "http://localhost:3000"
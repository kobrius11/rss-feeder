export const HACKERNEWS_URL = new URL("https://feeds.feedburner.com/TheHackersNews");
export const REQUEST_INIT = {
    headers: {
        'User-Agent': 'RSS-feeder app by kobrius11 (https://github.com/kobrius11/rss-feeder)',
        'Accept': 'application/rss+xml, text/xml, application/xml',
    }
}

export const RESPONSE_OK = {
    status: 200,
    headers: {
        'Content-Type': 'application/json'
    }
}

export function createErrResponse(err: Error) {
    return {
        "error": true,
        "message": err.message || "An unexpected error occurred"
    }
} 

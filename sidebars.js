module.exports = {
  someSidebar: {
    Prism: [
      {
        type: "category",
        label: "Http Gateway",
        items: [
          "prism/http/getting-started",
          "prism/http/response-aggregation",
          "prism/http/request-transform",
          "prism/http/response-transform",
          "prism/http/https-and-cors",
          "prism/http/caching",
          "prism/http/authentication",
          "prism/http/rollback",
          "prism/http/rate-limiting",
          "prism/http/circuit-breaker",
          "prism/http/load-balancing",
          "prism/http/request-pipelining",
          "prism/http/web-jobs",
          "prism/http/streams",
          "prism/http/cluster",
          "prism/http/redis-web-backends",
          "prism/http/releases",
        ],
        collapsed: false,
      },
      {
        type: "category",
        label: "WebSocket Gateway",
        items: [
          "prism/webSocket/basics",
          "prism/webSocket/authentication",
          "prism/webSocket/terminating",
        ],
        collapsed: false,
      },
    ],
    More: ["more/contributing", "more/license"],
  },
};

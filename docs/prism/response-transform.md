---
id: response-transform
title: Response Transform
---

By implementing the onResponse hook, the response can be transformed before being sent to the client. 

The signature of the onResponse hook is:

```ts
type onResponse = (
    // Response formed by Prism
    response: HttpResponse,
    // Incoming Request
    request: HttpRequest,
    // Responses received from backend services
    fetchedResponses: FetchedHttpResponse[]
  ) => Promise<HttpResponse | void>;
```

You should look up the type definitions for [HttpRequest](http-request-type), [HttpResponse](http-response-type) and [FetchedResponse](fetched-response-type).

Here's an example of how to implement an onResponse hook:

```ts
module.exports = {
  http: {
    routes: {
      "/users": {
        POST: {
          services: {
            messageservice: {
              type: "http" as "http",
              url: "http://localhost:6667/messages",
              onResponse: async (response, request, fetchedResponses) => {
                // Get the response object from a fetchedResponse object
                const backendResponses = fetchedResponses.map(
                  (x) => x.response
                );
                // Concat the body of all responses
                const concatenatedData = backendResponses
                  .map((x) => x.body.toString())
                  .join("--");
                // Send it back.
                return {
                  status: 200,
                  body: concatenatedData
                }
              }}}}}}}};
```


---
id: getting-started
title: Getting Started
---

The first step is to install Retransmit. Let's assume you're going to install it with npm on Node.JS

```sh
npm install -g @retransmit/gateway
```

There are two command line options that you need to know.

- '-p' specifies the port on which requests will be accepted
- '-c' specifies the location of the configuration file.

Example:

```sh
retransmit -p 80 -c /home/bruce/configs/retransmit.js
```

Note: The config file is a JS file, not JSON. If you like TypeScript (like us), the types for the config file are available at https://github.com/retransmit/retransmit/blob/master/src/types/index.ts.

Let's look at a basic config file. Our first goal is to expose an end point which merges responses from two services (account service and a messaging service).
And here it is.

```ts
module.exports = {
  http: {
    routes: {
      "/dashboard": {
        GET: {
          services: {
            accountservice: {
              type: "http" as "http",
              url: "http://localhost:6666/account",
            },
            messagingservice: {
              type: "http" as "http",
              url: "http://localhost:6667/messages",
            },
          }}}}}};
```

The example above receives a request at the url '/dashboard' and passes it on to account service and messaging service. Once responses are received, retransmit will merge the results and send the final response back to the client. For instance, if accountservice returned `{ "name": "batman" }` and messaging service returned `{ "messages": 10 }` the final response will be `{ "name": "batman", "messages": 10 }`.

### Headers, Cookies and Request Body

Headers, cookies and body are passed unmodified to the downstream services.

---
title: Basics
---

Prism can act as a Gateway for WebSocket connections, allowing multiple backend services to send data to connected clients. We recommend building WebSocket backend services using Redis Channels and Pub-Sub, but Prism can service connections by periodically polling Http Services as well. Let's get into details.

A typical configurations will be as below.

```ts
const config: UserAppConfig = {
  webSocket: {
    routes: {
      "/quotes": {
        services: {
          quoteservice: {
            type: "redis",
            requestChannel: "input",
          },
          chartservice: {
            type: "redis",
            requestChannel: "input",
          },
        },
      },
    },
    redis: {
      responseChannel: "output",
    },
  },
};
```

Whenver a message is received from the client, it is serialized and send sent to the channels mentioned in 'requestChannel'. Since multiple services can subscribe to the same channel, it's probably best for all services on a route ("/quotes" in the example above) to use the same channel to receive messages.

A serialized incoming message looks like this:

```ts
export type WebSocketRequestBase = {
  id: string;
  type: "message";
  route: string;
  path: string;
  remoteAddress: string | undefined;
  remotePort: number | undefined;
  request: string;
  responseChannel: string;
};
```

Since WebSocket offers asynchronous communication, services can send messages to clients whenver it wants. The 'id' field in the incoming message uniquely identifies an active connection, and does not change as long as the connection is kept alive. So to 
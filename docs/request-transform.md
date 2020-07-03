---
id: request-transform
title: Request Transform
---

Retransmit gives you a simple way to transform requests sent to various services.

The simplest approach tool to use here is the 'mapping' property in configuration. In the following example the header field "x-app-instance" is mapped to the field "x-app-id". So userservice will see "x-app-id" instead.

```ts
const config: AppConfig = {
  http: {
    routes: {
      "/users": {
        POST: {
          services: {
            userservice: {
              type: "http" as "http",
              url: "http://localhost:6666/users",
              mapping: {
                headers: {
                  include: {
                    "x-app-instance": "x-app-id",
                  }
                }}}}}}}}};
```

The same thing applies for request bodies. In the following example, the field 'username' in the request body is mapped to 'uname' before sending to accountservice.

```ts
const config = {
  // parts omitted for brevity
  services: {
    accountservice: {
      type: "http" as "http",
      url: "http://localhost:6666/users",
      mapping: {
        headers: {
          include: {
            username: "uname",
          },
        }}}}}
```

You could exclude things too. The following example excludes a specific header as well as a field from the request body.

```ts
const config = {
  // parts omitted for brevity
  services: {
    userservice: {
      type: "http" as "http",
      url: "http://localhost:6666/users",
      mapping: {
        headers: {
          exclude: ["x-auth-token"],
        },
        fields: {
          exclude: ["username"],
        },
      }}}}
```

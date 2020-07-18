---
id: request-transform
title: Request Transform
---

Retransmit gives you a simple way to transform requests sent to various services.

The simplest approach tool to use here is the 'mapping' property in configuration. In the following example the header field "x-app-token" is mapped to the field "x-auth-token". So userservice will see "x-auth-token" instead.

```ts
module.exports = {
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
                    "x-app-token": "x-auth-token",
                  }
                }}}}}}}}};
```

The same thing applies for request bodies. In the following example, the field 'username' in the request body is mapped to 'uname' before sending to accountservice.

```ts
module.exports = {
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
module.exports = {
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

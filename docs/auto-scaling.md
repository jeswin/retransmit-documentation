---
id: auto-scaling
title: Auto Scaling
---

Currently Retransmit only supports JWT based authentication. It internally uses the [https://github.com/auth0/node-jsonwebtoken](jsonwebtoken) library. So all the options supported by jsonwebtoken can be used here.

JWT is typically passed in the Authorization header as follows:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIXVCJ9...
```

If this is how you are passing JWT, the configuration is quite simple.


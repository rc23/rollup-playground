import { createHash, randomBytes } from "crypto";

const security = (req, res, next) => {
  console.log("req :", req);
  console.log("res :", res);
  res.locals.nonce = createHash("sha256")
    .update(randomBytes(16))
    .digest("base64");

  next();
};

export default security;

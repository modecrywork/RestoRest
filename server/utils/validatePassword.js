import crypto from "crypto";

const validatePassword = (hash, password, salt) => {
  const targetHash = crypto
    .pbkdf2Sync(password, salt, 1000, 15, "sha512")
    .toString("hex");
  return targetHash === hash;
};

export default validatePassword;

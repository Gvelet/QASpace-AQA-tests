import * as dotenv from "dotenv";

dotenv.config();

export const USERS = {
  admin: {
    login: process.env.USER_ADMIN_LOGIN ?? "MISSING_USER_ADMIN_LOGIN",
    password: process.env.USER_ADMIN_PASS ?? "MISSING_USER_ADMIN_PASS",
  },
  moder: {
    login: process.env.USER_MODER_LOGIN ?? "MISSING_USER_MODER_LOGIN",
    password: process.env.USER_MODER_PASS ?? "MISSING_USER_MODER_PASS",
  },
  client: {
    login: process.env.USER_CLIENT_LOGIN ?? "MISSING_USER_CLIENT_LOGIN",
    password: process.env.USER_CLIENT_PASS ?? "MISSING_USER_CLIENT_PASS",
  },
};
// import { Vonage } from "@vonage/server-sdk";
const { Vonage } = require("@vonage/server-sdk");

const vonageConfig = {
  apiKey: process.env.VONAGE_API_KEY as string,
  apiSecret: process.env.VONAGE_API_SECRET as string,
};

export const vonage = new Vonage(vonageConfig);

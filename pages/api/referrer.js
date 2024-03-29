// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendWhatsAppMessage } from "../../utils/sendWhatsappMessage";

export default function handler(req, res) {
  console.log(req.geo);
  console.log(req);

  if (req.method === "POST") {
    const referrer =
      req?.body?.referrer || req.headers.referer || "didn/t get it";
    sendWhatsAppMessage(res, referrer);
  }
}

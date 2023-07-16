// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendWhatsAppMessage } from "../../utils/sendWhatsappMessage";

export default function handler(req, res) {
  console.log(req.body.referrer);

  if (req.method === "POST") {
    const referrer = req?.body?.referrer;
    sendWhatsAppMessage(res, referrer);
  }
}

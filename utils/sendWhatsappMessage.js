import twilio from "twilio";

export async function sendWhatsAppMessage(res, message) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  try {
    //   const from = "whatsapp:+14155238886"; // Replace with your Twilio WhatsApp Sandbox phone number
    const response = await client.messages.create({
      body: message,
      from: "whatsapp:+14155238886",
      to: `whatsapp:+213795914857`,
    });

    console.log("Message sent successfully:", response.sid, message);
    res.status(200).json({});
  } catch (error) {
    console.error("Error sending WhatsApp message:", error.message, message);
    res.status(404).json({});
  }
}

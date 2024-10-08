import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phoneNumber } = req.body;
    const url = "https://sendsms.az/smxml/api";
    const controlId = `control-${Date.now()}`;
    const otp = Math.floor(1000 + Math.random() * 9000); // 4 haneli OTP oluştur
    const data = `
    <request>
        <head>
            <operation>submit</operation>
            <login>gammanet</login>
            <password>G!.23Ea</password>
            <controlid>${controlId}</controlid>
            <bulkmessage>message</bulkmessage>
            <title>GAMMANET</title>
            <scheduled>NOW</scheduled>
            <isbulk>false</isbulk>
        </head>
        <body>
            <msisdn>${phoneNumber}</msisdn>
            <message>Your OTP code is ${otp}</message>
        </body>
    </request>
    `;

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
      console.log("OTP başarıyla gönderildi:", otp);
      return res.status(200).json({ message: 'OTP gönderildi', otp });
    } catch (error) {
      console.error('Hata:', error);
      return res.status(500).json({ error: 'OTP gönderme hatası' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

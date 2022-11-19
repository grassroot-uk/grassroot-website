// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as SibApiV3Sdk from "@sendinblue/client";

const apiInstance = new SibApiV3Sdk.ContactsApi();

type Data = {
  message?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, account } = req.query;

  if (email && account) {
    apiInstance.setApiKey(
      SibApiV3Sdk.ContactsApiApiKeys.apiKey,
      process.env.SENDBLUE_API_KEY || ""
    );

    let createContact = new SibApiV3Sdk.CreateContact();

    createContact.email = (email as string) || "default@gmail.com";
    createContact.attributes = { account: account };
    createContact.listIds = [5];

    apiInstance.createContact(createContact).then(
      function (data) {
        res.status(200).json({ message: "signed up successfully." });
      },
      function (error) {
        res
          .status(500)
          .json({
            error: `failed to send email!! ${error.response.body.message}`,
          });
      }
    );
  } else {
    res.status(400).json({ error: "Email or Account not present!!" });
  }
}

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import "firebase-functions";
admin.initializeApp();

const key: string = "fcc8c148622285a43e18777dda6f1800";
const secret: string = "2ecbcf7f1b639546ba336c3b334da0bc";

// // Start writing Firebase Functions
const mailjet = require("node-mailjet").connect(key, secret);
// // https://firebase.google.com/docs/functions/typescript
//
export const sendEmailUpdate = functions.database
  .ref(`/users/{id}`)
  .onUpdate(async (change) => {
    const count: number = change.after.child("count").val();
    const email: string = change.before.child("email").val();
    const name: string = change.before.child("username").val();

    if (count % 10 === 0) {
      try {
        const request = await mailjet
          .post("send", { version: "v3.1" })
          .request({
            Messages: [
              {
                From: {
                  Email: "heather@trustscout.io",
                  Name: "Heather",
                },
                To: [
                  {
                    Email: `${email}`,
                    Name: `${name}`,
                  },
                ],
                Subject: "Your count check email",
                TextPart: `Dear ${name}, welcome to TrustScout! Your count value is ${count}`,
                HTMLPart: `<h3>${name}, welcome to <a href="https://www.trustscout.io/">TrustScout</a>!</h3><br />Your count value is ${count}`,
              },
            ],
          });
        const result = await request.body;
        return result;
      } catch (error) {
        console.error(error);
      }
    }
  });

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

from send_mail import send_emails_to_users

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/send-emails")
async def send_emails(spreadsheet: UploadFile = File(...), mail_file: UploadFile = File(...)):
    try:
        # Read Excel file in memory
        df = pd.read_excel(spreadsheet.file)
        if "email" not in df.columns:
            raise HTTPException(status_code=400, detail="Excel must contain 'email' column")

        email_list = df["email"].dropna().tolist()

        # Read mail body from mail.txt
        mail_content = (await mail_file.read()).decode("utf-8")

        # Send emails
        result = send_emails_to_users(email_list, mail_content)

        return {"message": "Emails sent successfully", "sent_to": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

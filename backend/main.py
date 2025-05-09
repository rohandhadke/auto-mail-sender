from fastapi import FastAPI, UploadFile, File, Form, HTTPException
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
async def send_emails(
    spreadsheet: UploadFile = File(...),
    mail_file: UploadFile = File(...),
    sender_email: str = Form(...),
    sender_password: str = Form(...),
    attachment: UploadFile = File(None)
):
    try:
        # Read Excel file
        df = pd.read_excel(spreadsheet.file)
        if "email" not in df.columns:
            raise HTTPException(status_code=400, detail="Excel must contain 'email' column")

        email_list = df["email"].dropna().tolist()

        # Read email body
        mail_content = (await mail_file.read()).decode("utf-8")

        # Read attachment (optional)
        attachment_data = None
        attachment_filename = None
        if attachment:
            attachment_data = await attachment.read()
            attachment_filename = attachment.filename

        # Send emails using user's credentials
        result = send_emails_to_users(
            email_list=email_list,
            mail_content=mail_content,
            sender_email=sender_email,
            sender_password=sender_password,
            attachment_data=attachment_data,
            attachment_filename=attachment_filename
        )

        return {"message": "Emails sent successfully", "sent_to": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

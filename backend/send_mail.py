import smtplib
from email.message import EmailMessage

def send_emails_to_users(email_list, subject, mail_content, sender_email, sender_password, attachment_data=None, attachment_filename=None):
    sent_emails = []

    for recipient in email_list:
        try:
            msg = EmailMessage()
            msg.set_content(mail_content)
            msg["Subject"] = subject  # ✅ Dynamic subject
            msg["From"] = sender_email
            msg["To"] = recipient

            # Add attachment if provided
            if attachment_data and attachment_filename:
                msg.add_attachment(
                    attachment_data,
                    maintype="application",
                    subtype="octet-stream",
                    filename=attachment_filename
                )

            with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
                server.login(sender_email, sender_password)
                server.send_message(msg)

            sent_emails.append(recipient)
        except Exception as e:
            print(f"Failed to send to {recipient}: {e}")

    return sent_emails

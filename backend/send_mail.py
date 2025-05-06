import smtplib
from email.message import EmailMessage

def send_emails_to_users(email_list, mail_content):
    # Configure your email settings
    sender_email = "rohandhadke7620@gmail.com"
    sender_password = "jsot buqr aehy rlgq"

    sent_emails = []

    for recipient in email_list:
        try:
            msg = EmailMessage()
            msg.set_content(mail_content)
            msg["Subject"] = "Automated Email"
            msg["From"] = sender_email
            msg["To"] = recipient

            with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
                server.login(sender_email, sender_password)
                server.send_message(msg)

            sent_emails.append(recipient)
        except Exception as e:
            print(f"Failed to send email to {recipient}: {e}")

    return sent_emails

# 📧 Automated Email Sender with React & FastAPI

This project is a web-based tool to send bulk emails using Gmail. It allows users to upload a spreadsheet of recipients, a plain-text email body, and optional attachments, and send customized emails easily and securely.

## 🚀 Features

- Upload recipient list via `.csv` or `.xlsx`
- Send emails using your Gmail (via App Passwords)
- Upload plain text email content (.txt)
- Optional file attachment (e.g., PDF, image)
- Built using **React.js (Frontend)** and **FastAPI (Backend)**
- Error handling and loading state for smoother UX

---

## 🛠️ Tech Stack

| Frontend     | Backend    | Others         |
|--------------|------------|----------------|
| React.js     | FastAPI    | Pandas         |
| Bootstrap    | Uvicorn    | Gmail SMTP     |
| Axios        | CORS       | App Passwords  |

---

## 📂 Project Structure

├── frontend/
│ └── SendEmails.jsx
│
├── backend/
│ ├── main.py
│ └── send_mail.py
│
├── README.md

## How to Use
1. Enter your Gmail and App Password.

2. Enter an email subject line.

3. Upload:

    - A spreadsheet file (.csv or .xlsx) with an email column.

    - A text file (.txt) containing the email body.

    - (Optional) Any file to attach.

4. Click "Send Emails".

5. View the success/failure message.


## Security Note
    - Your Gmail password is never stored.

    - Always use App Passwords, not your main Gmail password.

    - Use this tool responsibly to avoid spam and follow Gmail's sending limits.

## Contributing
This project is open source and welcomes contributions from everyone!
If you'd like to add features, fix bugs, or improve documentation:

    - Fork this repository

    - Create a new branch (git checkout -b feature-name)

    - Commit your changes (git commit -m 'Added feature')

    - Push to the branch (git push origin feature-name)

    - Open a pull request
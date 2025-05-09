import React, { useState } from 'react';
import axios from 'axios';

function SendEmail() {
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPassword, setSenderPassword] = useState('');
  const [spreadsheet, setSpreadsheet] = useState(null);
  const [mailFile, setMailFile] = useState(null);
  const [attachment, setAttachment] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendEmails = async () => {
    if (!senderEmail || !senderPassword || !spreadsheet || !mailFile) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("sender_email", senderEmail);
    formData.append("sender_password", senderPassword);
    formData.append("spreadsheet", spreadsheet);
    formData.append("mail_file", mailFile);
    if (attachment) {
      formData.append("attachment", attachment);
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await axios.post("http://localhost:8000/send-emails", formData);
      setMessage(`${res.data.message}`);
    } catch (error) {
      console.error(error);
      setMessage("Failed to send emails. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Auto Mail Sender</h2>

      <div className="mb-3">
        <label className="form-label">Your Email</label>
        <input
          type="email"
          className="form-control"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          placeholder="youremail@gmail.com"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Your App Password</label>
        <input
          type="password"
          className="form-control"
          value={senderPassword}
          onChange={(e) => setSenderPassword(e.target.value)}
          placeholder="App-specific password"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Upload Spreadsheet (.csv or .xlsx)</label>
        <input
          type="file"
          className="form-control"
          accept=".csv,.xlsx"
          onChange={(e) => setSpreadsheet(e.target.files[0])}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Upload Mail Content (mail.txt)</label>
        <input
          type="file"
          className="form-control"
          accept=".txt"
          onChange={(e) => setMailFile(e.target.files[0])}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Optional Attachment (PDF, Image, etc.)</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => setAttachment(e.target.files[0])}
        />
      </div>

      <div className="d-grid">
        <button
          className="btn btn-primary"
          onClick={handleSendEmails}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Sending...
            </>
          ) : (
            "Send Emails"
          )}
        </button>
      </div>

      {message && (
        <div className={`alert mt-4 ${message.startsWith("Emails") ? "alert-success" : "alert-danger"}`} role="alert">
          {message}
        </div>
      )}
    </div>
  );
}

export default SendEmail;

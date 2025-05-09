import React, { useState } from 'react';
import axios from 'axios';

function SendEmail() {
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPassword, setSenderPassword] = useState('');
  const [emailSubject, setEmailSubject] = useState(''); // New state
  const [spreadsheet, setSpreadsheet] = useState(null);
  const [mailFile, setMailFile] = useState(null);
  const [attachment, setAttachment] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendEmails = async () => {
    if (!senderEmail || !senderPassword || !emailSubject || !spreadsheet || !mailFile) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("sender_email", senderEmail);
    formData.append("sender_password", senderPassword);
    formData.append("subject", emailSubject);
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
  <div className="container my-5 p-4 shadow rounded bg-white" style={{ maxWidth: '650px' }}>
  <h2 className="mb-4 text-center fw-bold text-primary">Automated Mail Sender</h2>

  <form>
    {/* Sender Email */}
    <div className="mb-3">
      <label className="form-label">Your Gmail Address</label>
      <input
        type="email"
        className="form-control"
        value={senderEmail}
        onChange={(e) => setSenderEmail(e.target.value)}
        placeholder="youremail@gmail.com"
        required
      />
    </div>

    {/* App Password */}
    <div className="mb-3">
      <label className="form-label">Your Gmail App Password</label>
      <input
        type="password"
        className="form-control"
        value={senderPassword}
        onChange={(e) => setSenderPassword(e.target.value)}
        placeholder="App-specific password (Not your Gmail login password)"
        required
      />
      <div className="form-text">
        You must generate an app password in your Google Account settings.
      </div>
    </div>

    {/* Subject */}
    <div className="mb-3">
      <label className="form-label">Email Subject</label>
      <input
        type="text"
        className="form-control"
        value={emailSubject}
        onChange={(e) => setEmailSubject(e.target.value)}
        placeholder="Enter subject line for the email"
        required
      />
    </div>

    {/* Spreadsheet */}
    <div className="mb-3">
      <label className="form-label">Upload Spreadsheet (.csv or .xlsx)</label>
      <input
        type="file"
        className="form-control"
        accept=".csv,.xlsx"
        onChange={(e) => setSpreadsheet(e.target.files[0])}
        required
      />
      <div className="form-text">
        Spreadsheet must include an <strong>"email"</strong> column.
      </div>
    </div>

    {/* Mail Content */}
    <div className="mb-3">
      <label className="form-label">Upload Mail Body (.txt)</label>
      <input
        type="file"
        className="form-control"
        accept=".txt"
        onChange={(e) => setMailFile(e.target.files[0])}
        required
      />
      <div className="form-text">
        Use plain text file with your email message.
      </div>
    </div>

    {/* Optional Attachment */}
    <div className="mb-4">
      <label className="form-label">Optional Attachment</label>
      <input
        type="file"
        className="form-control"
        onChange={(e) => setAttachment(e.target.files[0])}
      />
      <div className="form-text">
        Upload PDF, image, or any file to attach with the email.
      </div>
    </div>

    {/* Submit Button */}
    <div className="d-grid mb-3">
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleSendEmails}
        disabled={loading}
      >
        {loading ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            Sending Emails...
          </>
        ) : (
          "Send Emails"
        )}
      </button>
    </div>

    {/* Message Display */}
    {message && (
      <div
        className={`alert ${message.startsWith("Emails") ? "alert-success" : "alert-danger"}`}
        role="alert"
      >
        {message}
      </div>
    )}
  </form>
</div>

  );
}

export default SendEmail;

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [spreadsheet, setSpreadsheet] = useState(null);
  const [mailFile, setMailFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSendEmails = async () => {
    if (!spreadsheet || !mailFile) {
      setMessage("❗ Please upload both files before sending.");
      return;
    }

    const formData = new FormData();
    formData.append("spreadsheet", spreadsheet);
    formData.append("mail_file", mailFile);

    try {
      const res = await axios.post('http://localhost:8000/send-emails/', formData);
      setMessage(`✅ ${res.data.message}`);
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to send emails.");
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>📧 Auto Mail Sender</h2>

      <label>Upload Spreadsheet (.csv or .xlsx)</label>
      <input type="file" accept=".csv,.xlsx" onChange={(e) => setSpreadsheet(e.target.files[0])} />
      <br /><br />

      <label>Upload Mail Content (mail.txt)</label>
      <input type="file" accept=".txt" onChange={(e) => setMailFile(e.target.files[0])} />
      <br /><br />

      <button onClick={handleSendEmails}>Send Emails</button>

      <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>
    </div>
  );
}

export default App;

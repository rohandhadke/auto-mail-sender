import React from "react";

const HowToUse = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">How to Use Auto Mail Sender</h2>

      <ol className="list-group list-group-numbered mb-4">
        <li className="list-group-item">
          <strong>Prepare a Spreadsheet:</strong> Create an Excel or CSV file (.xlsx or .csv) with a column that contains recipient email addresses.
        </li>
        <li className="list-group-item">
          <strong>Create a Mail Content File:</strong> Write your message content in a plain text file (.txt). This will be the body of the email.
        </li>
        <li className="list-group-item">
          <strong>Optional Attachment:</strong> You can upload a file (PDF, image, etc.) that will be attached to the email.
        </li>
        <li className="list-group-item">
          Go to the <strong>Send Auto Email</strong> tab.
        </li>
        <li className="list-group-item">
          Enter your <strong>Gmail address</strong> and your <strong>Gmail App Password</strong> (not your regular password). See below how to generate an app password.
        </li>
        <li className="list-group-item">
          Upload the spreadsheet file, mail content file, and (optionally) an attachment.
        </li>
        <li className="list-group-item">
          Click on the <strong>"Send Emails"</strong> button and wait for the confirmation message.
        </li>
        <li className="list-group-item">
          Emails will be automatically sent to the addresses listed in your spreadsheet.
        </li>
      </ol>

      <h4 className="mb-3">How to Generate an App Password in Gmail</h4>
      <p>
        Gmail requires an App Password to allow third-party apps like Auto Mail Sender to access your email securely. Follow these steps to generate it:
      </p>
      <ol className="list-group list-group-numbered mb-4">
        <li className="list-group-item">
          Go to your Google Account: <a href="https://myaccount.google.com" target="_blank" rel="noopener noreferrer">https://myaccount.google.com</a>
        </li>
        <li className="list-group-item">
          On the left menu, click on <strong>Security</strong>.
        </li>
        <li className="list-group-item">
          Scroll down to the <strong>Signing in to Google</strong> section and ensure that <strong>2-Step Verification</strong> is <strong>turned on</strong>. If not, set it up first.
        </li>
        <li className="list-group-item">
          After 2-Step Verification is enabled, go back to the Security page. Now, click on <strong>App passwords</strong>.
        </li>
        <li className="list-group-item">
          Google will ask you to sign in again for security.
        </li>
        <li className="list-group-item">
          Under "Select app", choose <strong>Mail</strong>. Under "Select device", choose <strong>Other</strong> and give it a name like "AutoMailSender". Click <strong>Generate</strong>.
        </li>
        <li className="list-group-item">
          Google will show you a 16-character app password. <strong>Copy it</strong> and use it in the Auto Mail Sender app as your password.
        </li>
        <li className="list-group-item">
          <strong>Important:</strong> You do not need to remember this app password. You can always revoke it and generate a new one.
        </li>
        <li className="list-group-item">
            <strong>Important:</strong> If you are getting Problem to find or Generate app password then go to this link <a href="https://myaccount.google.com/apppasswords" target="_blank">https://myaccount.google.com/apppasswords</a>
        </li>
      </ol>

      <div className="alert alert-warning mt-3" role="alert">
        ⚠️ Never share your app password with others. It is like a key to access your email.
      </div>

    </div>
  );
};

export default HowToUse;

import React from "react";

const HowToUse = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">How to Use Auto Mail Sender</h2>
      <ol className="list-group list-group-numbered">
        <li className="list-group-item">
          Prepare an Excel file (.xlsx) with a column that contains email addresses.
        </li>
        <li className="list-group-item">
          Create a plain text (.txt) file with the message content you want to send.
        </li>
        <li className="list-group-item">
          Go to the <strong>Send Auto Email</strong> tab.
        </li>
        <li className="list-group-item">
          Upload both the Excel and Text files using the file inputs.
        </li>
        <li className="list-group-item">
          Click on <strong>Send Email</strong> button. Wait for the success message.
        </li>
        <li className="list-group-item">
          That’s it! Your emails will be sent to the recipients listed in the Excel file.
        </li>
      </ol>
    </div>
  );
};

export default HowToUse;

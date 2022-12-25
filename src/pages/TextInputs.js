import React, { useState } from "react";
import jsPDF from "jspdf";

function TextInputs() {
  // State variables to store the text from the input fields
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  // State variable to store the PDF data
  const [pdfData, setPdfData] = useState("");

  // Generate the PDF when the generate button is clicked
  const handleGenerate = () => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Add the text from the input fields to the PDF
    doc.text(input1, 10, 10);
    doc.text(input2, 10, 20);
    doc.text(input3, 10, 30);

    // Generate the PDF data
    setPdfData(doc.output("datauristring"));
  };

    // Open the PDF in a new tab when the show button is clicked
    const handleShow = () => {
      window.open(pdfData);
    };

  // Send the PDF as an email when the send button is clicked
  const handleSend = () => {
    // Open the default email client with a new message pre-filled with the subject and body
    window.location.href = `mailto:?subject=Text Inputs PDF&body=Here is the PDF with the text inputs: ${pdfData}`;
  };

  return (
    <form>
      <label htmlFor="input1">Input 1:</label>
      <br />
      <input
        type="text"
        id="input1"
        value={input1}
        onChange={(event) => setInput1(event.target.value)}
      />
      <br />
      <label htmlFor="input2">Input 2:</label>
      <br />
      <input
        type="text"
        id="input2"
        value={input2}
        onChange={(event) => setInput2(event.target.value)}
      />
      <br />
      <label htmlFor="input3">Input 3:</label>
      <br />
      <input
        type="text"
        id="input3"
        value={input3}
        onChange={(event) => setInput3(event.target.value)}
      />
      <br />
      <br />
      <button type="button" onClick={handleGenerate}>
        Generate PDF
      </button>
      <button type="button" onClick={handleShow} disabled={!pdfData}>
        Show PDF
      </button>
      <button type="button" onClick={handleSend} disabled={!pdfData}>
        Send PDF as Email
      </button>
      <p>
            Click <a href="/">here</a> to go back to the main page.
        </p>
    </form>
  );
}

export default TextInputs;

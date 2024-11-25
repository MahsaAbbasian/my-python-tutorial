import React from 'react';
import CodeBlock from '../../components/CodeBlock'; // Ensure this path is correct

const FileConversion = () => {
  // Code snippets for each section
  const codeSnippetConverter = `
from docx import Document
from reportlab.pdfgen import canvas

def convert_doc_to_pdf(input_path, output_path):
    """
    Converts a .docx file to a .pdf file.

    :param input_path: Path to the .docx file.
    :param output_path: Path to save the resulting .pdf file.
    """
    try:
        # Open .doc file
        doc = Document(input_path)

        # Create new PDF file
        pdf = canvas.Canvas(output_path)

        # Starting y position in the PDF file
        y_position = 800

        # Loop through the paragraphs in the .docx file
        for paragraph in doc.paragraphs:
            pdf.drawString(100, y_position, paragraph.text)
            y_position -= 20  # Move down for the next line

        pdf.save()
        return True, f"File converted successfully and saved to: {output_path}"
    except Exception as e:
        return False, str(e)
  `;

  const codeSnippetGUI = `
import os
from tkinter import Tk, Label, Button, filedialog
from tkinter.messagebox import showerror, showinfo
from converter import convert_doc_to_pdf

def run_converter():
    try:
        # Select input .doc file
        input_path = filedialog.askopenfilename(filetypes=[("Word Documents", "*.docx")])
        if not input_path:
            return

        # Ask user to select output file
        output_path = filedialog.asksaveasfilename(defaultextension=".pdf", filetypes=[("PDF Files", "*.pdf")])
        if not output_path:
            return

        # Perform conversion
        success, message = convert_doc_to_pdf(input_path, output_path)

        if success:
            showinfo("Success", message)
        else:
            showerror("Error", message)
    except Exception as e:
        showerror("Error", f"Error during file selection: {e}")

def create_gui():
    root = Tk()
    root.title("DOC to PDF Converter")
    Label(root, text="DOC to PDF Converter", font=("Helvetica", 16)).pack(pady=10)
    Button(root, text="Select and Convert File", command=run_converter, font=("Helvetica", 12), bg="blue", fg="white").pack(pady=20)
    Button(root, text="Exit", command=root.quit, font=("Helvetica", 12), bg="red", fg="white").pack(pady=10)
    root.geometry("400x200")
    root.mainloop()
  `;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Automate File Conversion with a Python GUI</h1>
      <p>
        The goal of this script is to automate the process of converting <code>.docx</code> files into <code>.pdf</code> files using a simple and user-friendly Python GUI.
      </p>

      <h2>Here’s what it means:</h2>

      <h3>Input File:</h3>
      <p>
        You’ll select a <code>.docx</code> file on your computer that you want to convert into a <code>.pdf</code> file. For example, if you have a Word document called <em>Report.docx</em>, you’d select this file in the GUI.
      </p>

      <h3>Output File:</h3>
      <p>
        You’ll specify where you want the converted <code>.pdf</code> file to be saved. The script will allow you to name the resulting file and choose its location.
      </p>

      <h3>Result:</h3>
      <p>
        The script processes the <code>.docx</code> file, reads its content (paragraph by paragraph), and creates a new <code>.pdf</code> file with the same content formatted for PDF.
      </p>

      <h2>Example Walkthrough</h2>
      <p>
        Let’s say you want to convert a file named <em>ProjectPlan.docx</em> into a <em>ProjectPlan.pdf</em> saved in your Documents folder.
      </p>
      <ol>
        <li>Run the script. A small GUI (Graphical User Interface) window opens.</li>
        <li>Browse to select your <code>.docx</code> file. In this example, you’d select <em>ProjectPlan.docx</em>.</li>
        <li>Choose a location to save the PDF. You’ll name the output file (e.g., <em>ProjectPlan.pdf</em>) and select a folder.</li>
        <li>Click the Convert button. The script reads the <code>.docx</code> file and creates the PDF.</li>
      </ol>

      <p>
        After running the script, your file will be converted, and you’ll find the <code>.pdf</code> saved in the location you specified.
      </p>

      <h3>Result:</h3>
      <p>
        For this example, if your input file was <em>ProjectPlan.docx</em>, the result will be:
      </p>
      <ul>
        <li>A new file named <em>ProjectPlan.pdf</em> in your selected folder.</li>
      </ul>

      <p>
        This automation is helpful when you need to convert Word documents into PDFs quickly, without opening multiple software tools.
      </p>

      <h1>Step 1: Conversion Logic</h1>
      <p>
        The core logic for converting <code>.docx</code> files into <code>.pdf</code> is implemented in <strong>converter.py</strong>. It includes:
      </p>
      
      <CodeBlock code={codeSnippetConverter} />
      <h1>Step1: Implementing the File converting Script</h1>
      <h2>File 1: <code>converter.py</code></h2>
      <p>This file contains the logic to convert `.docx` files to `.pdf`.</p>

      <CodeBlock code={`from docx import Document\nfrom reportlab.pdfgen import canvas`} />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; `Document` from the `docx` library handles `.docx` files.<br />
        &nbsp;&nbsp;&nbsp;&bull; `canvas` from the `reportlab` library creates and manages PDF files.
      </p>

      <CodeBlock code={`def convert_doc_to_pdf(input_path, output_path):\n    """\n    Converts a .docx file to a .pdf file.\n    """`} />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Defines a reusable function.<br />
        &nbsp;&nbsp;&nbsp;&bull; Parameters:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&deg; `input_path`: Path to the `.docx` file.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&deg; `output_path`: Path to save the `.pdf` file.<br />
        &nbsp;&nbsp;&nbsp;&bull; A docstring provides documentation for the function.
      </p>

      <CodeBlock code={`    try:\n        doc = Document(input_path)`} />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Creates a `Document` object representing the `.docx` file.<br />
        &nbsp;&nbsp;&nbsp;&bull; If the file doesn't exist, an error is raised.
      </p>

      <CodeBlock code={`        pdf = canvas.Canvas(output_path)`} />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Initializes a `Canvas` object for the PDF file.<br />
        &nbsp;&nbsp;&nbsp;&bull; Provides methods to add elements like text or images.
      </p>

      <CodeBlock code={`        y_position = 800`} />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Sets the starting vertical position for text in the PDF.
      </p>

      <CodeBlock
        code={`        for paragraph in doc.paragraphs:\n            pdf.drawString(100, y_position, paragraph.text)\n            y_position -= 20`}
      />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Loops through each paragraph in the `.docx` file.<br />
        &nbsp;&nbsp;&nbsp;&bull; Writes the paragraph text to the PDF.<br />
        &nbsp;&nbsp;&nbsp;&bull; Adjusts the vertical position for subsequent paragraphs.
      </p>

      <CodeBlock code={`        pdf.save()\n        return True, f"File converted successfully and saved to: {output_path}"`} />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Finalizes the PDF file.<br />
        &nbsp;&nbsp;&nbsp;&bull; Returns success status and a message.
      </p>

      <CodeBlock code={`    except Exception as e:\n        return False, str(e)`} />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Handles errors by returning failure status and the error message.
      </p>

      <h1>Step 2: Set up tkinter GUI</h1>
      <h2>File 2: <code>gui_for_converter.py</code></h2>
      <p>This file provides a graphical user interface for interacting with the conversion script.</p>
      <CodeBlock code={codeSnippetGUI} />

      <CodeBlock
        code={`import os\nfrom tkinter import Tk, Label, Button, filedialog\nfrom tkinter.messagebox import showerror, showinfo\nfrom converter import convert_doc_to_pdf`}
      />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Imports GUI components from `tkinter`.<br />
        &nbsp;&nbsp;&nbsp;&bull; Imports `convert_doc_to_pdf` from <code>converter.py</code>.
      </p>

      <CodeBlock
        code={`def run_converter():\n    try:\n        input_path = filedialog.askopenfilename(filetypes=[("Word Documents", "*.docx")])`}
      />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Opens a dialog to select the `.docx` file.<br />
        &nbsp;&nbsp;&nbsp;&bull; Stores the file path in `input_path`.
      </p>

      <CodeBlock
        code={`        output_path = filedialog.asksaveasfilename(defaultextension=".pdf", filetypes=[("PDF Files", "*.pdf")])`}
      />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Opens another dialog to save the `.pdf` file.<br />
        &nbsp;&nbsp;&nbsp;&bull; Stores the file path in `output_path`.
      </p>

      <CodeBlock code={`        success, message = convert_doc_to_pdf(input_path, output_path)`} />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Calls the conversion function and receives the result.
      </p>

      <CodeBlock
        code={`        if success:\n            showinfo("Success", message)\n        else:\n            showerror("Error", message)`}
      />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Displays a success or error message based on the result.
      </p>

      <CodeBlock
        code={`def create_gui():\n    root = Tk()\n    root.title("DOC to PDF Converter")`}
      />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Initializes the main GUI window.
      </p>

      <CodeBlock
        code={`    Button(root, text="Select and Convert File", command=run_converter, font=("Helvetica", 12), bg="blue", fg="white").pack(pady=20)`}
      />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Adds a button to trigger file conversion.
      </p>

      <CodeBlock code={`    root.geometry("400x200")\n    root.mainloop()`} />
      <p>
        - <strong>What it does:</strong><br />
        &nbsp;&nbsp;&nbsp;&bull; Sets the window size and starts the GUI event loop.
      </p>

      <p>
        <h2>Check out the code on GitHub:</h2>
        <h3>Link toward gui_for_converter.py file</h3>
        <a 
          href="https://github.com/MahsaAbbasian/python/blob/main/gui_for_converter.py" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#007BFF', textDecoration: 'none', marginLeft: '10px' }}
        >
          GitHub Repository
        </a>

        <h3>Link toward converter.py file</h3>
        <a 
          href="https://github.com/MahsaAbbasian/python/blob/main/converter.py" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#007BFF', textDecoration: 'none', marginLeft: '10px' }}
        >
          GitHub Repository
        </a>
      </p>
    </div>
  );
};


export default FileConversion;

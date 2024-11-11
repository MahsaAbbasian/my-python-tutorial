// src/pages/Assignment.js
import React from 'react';
import CodeBlock from '../components/CodeBlock';

const Assignment = () => {
  const codeSnippet = `
import tkinter as tk
from tkinter import filedialog

# Initialize the main Tkinter window
root = tk.Tk()
root.title("File Renamer Script")
root.geometry("400x300")  # Set window size

# Label and Entry for folder path
folder_label = tk.Label(root, text="Folder Path:")
folder_label.pack(pady=5)
folder_entry = tk.Entry(root, width=50)
folder_entry.pack(pady=5)

# Function to browse and select folder
def browse_folder():
    folder_path = filedialog.askdirectory()  # Open a dialog to select folder
    folder_entry.delete(0, tk.END)  # Clear the entry field first
    folder_entry.insert(0, folder_path)  # Insert selected path into entry field

# Browse button for folder path
browse_button = tk.Button(root, text="Browse", command=browse_folder)
browse_button.pack(pady=5)

# Label and Entry for new name prefix
name_label = tk.Label(root, text="New Name Prefix:")
name_label.pack(pady=5)
name_entry = tk.Entry(root, width=50)
name_entry.pack(pady=5)

# Run the Tkinter main event loop
root.mainloop()
  `;

  return (
    <div style={{ padding: '20px' }}>
        
      <h1>Assignment 1: Set Up Tkinter GUI</h1>
      <p>
        In this assignment, we'll set up the main Tkinter window and create components for:
        <ol>
          <li>An entry field to type or browse for the folder path.</li>
          <li>An entry field to specify the new file name prefix.</li>
          <li>A button to trigger the renaming process.</li>
        </ol>
      </p>

      <h2>Code and Explanation</h2>
      <p>
        1. <strong>Import Tkinter Library</strong>:
      </p>
      <CodeBlock code={`import tkinter as tk\nfrom tkinter import filedialog`} />
      <p>
        - <code>tkinter</code> is the library we use to create the GUI.<br />
        - <code>filedialog</code> allows us to open a dialog box to select a folder.
      </p>

      <p>
        2. <strong>Initialize the Tkinter Window</strong>:
      </p>
      <CodeBlock code={`root = tk.Tk()`} />
      <p>
        - <code>tk.Tk()</code> creates the main application window where our GUI elements (like buttons and text fields) will appear.<br />
        - We assign this window to the variable <code>root</code>, so we can refer to it throughout our code.
      </p>

      <p>
        3. <strong>Set the Window Title</strong>:
      </p>
      <CodeBlock code={`root.title("File Renamer Script")`} />
      <p>
        - <code>root.title("File Renamer Script")</code> sets the title of the window to "File Renamer Script." This title will appear at the top of the window.
      </p>

      <p>
        4. <strong>Set the Window Size</strong>:
      </p>
      <CodeBlock code={`root.geometry("400x300")`} />
      <p>
        - <code>root.geometry("400x300")</code> sets the width and height of the window. Here, we set it to be 400 pixels wide and 300 pixels high.
      </p>

      <p>
        5. <strong>Add a Label for Folder Path</strong>:
      </p>
      <CodeBlock code={`folder_label = tk.Label(root, text="Folder Path:")\nfolder_label.pack(pady=5)`} />
      <p>
        - <code>tk.Label(root, text="Folder Path:")</code> creates a label widget that displays the text "Folder Path:" in the window.<br />
        - <code>.pack(pady=5)</code> places the label in the window with some vertical padding (space) around it.
      </p>

      <p>
        6. <strong>Add an Entry Field for Folder Path</strong>:
      </p>
      <CodeBlock code={`folder_entry = tk.Entry(root, width=50)\nfolder_entry.pack(pady=5)`} />
      <p>
        - <code>tk.Entry(root, width=50)</code> creates an entry widget (a text box) where the user can type or see the folder path.<br />
        - <code>width=50</code> makes the entry box 50 characters wide.<br />
        - <code>.pack(pady=5)</code> places the entry field below the label, with some vertical padding.
      </p>

      <p>
        7. <strong>Define the Browse Function</strong>:
      </p>
      <CodeBlock
        code={`def browse_folder():\n    folder_path = filedialog.askdirectory()\n    folder_entry.delete(0, tk.END)\n    folder_entry.insert(0, folder_path)`}
      />
      <p>
        - <code>def browse_folder():</code> defines a function named <code>browse_folder</code>. This function will run when the "Browse" button is clicked.<br />
        - <code>filedialog.askdirectory()</code> opens a dialog box to select a folder and returns the selected path.<br />
        - <code>folder_entry.delete(0, tk.END)</code> clears any text currently in the <code>folder_entry</code> field.<br />
        - <code>folder_entry.insert(0, folder_path)</code> inserts the selected folder path into the <code>folder_entry</code> field.
      </p>

      <p>
        8. <strong>Add the Browse Button</strong>:
      </p>
      <CodeBlock
        code={`browse_button = tk.Button(root, text="Browse", command=browse_folder)\nbrowse_button.pack(pady=5)`}
      />
      <p>
        - <code>tk.Button(root, text="Browse", command=browse_folder)</code> creates a button with the label "Browse." <br />
        - <code>command=browse_folder</code> tells the button to call the <code>browse_folder</code> function when clicked.<br />
        - <code>.pack(pady=5)</code> places the button below the entry field, with some vertical padding.
      </p>

      <p>
        9. <strong>Add a Label for New Name Prefix</strong>:
      </p>
      <CodeBlock
        code={`name_label = tk.Label(root, text="New Name Prefix:")\nname_label.pack(pady=5)`}
      />
      <p>
        - <code>tk.Label(root, text="New Name Prefix:")</code> creates a label with the text "New Name Prefix:" so the user knows to enter the prefix.<br />
        - <code>.pack(pady=5)</code> places the label below the "Browse" button, with some vertical padding.
      </p>

      <p>
        10. <strong>Add an Entry Field for New Name Prefix</strong>:
      </p>
      <CodeBlock
        code={`name_entry = tk.Entry(root, width=50)\nname_entry.pack(pady=5)`}
      />
      <p>
        - <code>tk.Entry(root, width=50)</code> creates another entry field where the user can type the new name prefix.<br />
        - <code>.pack(pady=5)</code> places this entry field below the prefix label, with some vertical padding.
      </p>

      <p>
        11. <strong>Run the Tkinter Main Event Loop</strong>:
      </p>
      <CodeBlock code={`root.mainloop()`} />
      <p>
        - <code>root.mainloop()</code> starts the Tkinter event loop, which keeps the window open and responsive.<br />
        - This line is necessary for Tkinter applications to run, as it listens for events (like button clicks) and updates the window as needed.
      </p>

      <h2>Summary of Step 1</h2>
      <p>
        At this stage, you’ve set up the basic GUI:<br />
        - The window has a title and fixed size.<br />
        - There’s a label and entry field for the folder path.<br />
        - A "Browse" button opens a folder selection dialog.<br />
        - Another label and entry field allow the user to enter the new name prefix.
      </p>

      <h2>Full Code for Step 1</h2>
      <CodeBlock code={codeSnippet} />

      <p>
        Now that the GUI is ready, in the <strong>next step</strong>, we’ll implement the
        <strong>file renaming function</strong>. This function will take the folder path
        and name prefix from the entry fields and rename each file in the selected folder.
      </p>

      <p>
        Check out the code on GitHub:
        <a 
          href="https://github.com/MahsaAbbasian/python/blob/main/file_renamer.py" 
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

export default Assignment;


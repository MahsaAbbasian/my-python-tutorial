import React from 'react';
import CodeBlock from '../../components/CodeBlock'; // Ensure this path is correct

const Assignment = () => {
  // Code snippets for each section
  const codeSnippetStep1 = `
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

  const codeSnippetStep2Part2 = `
# the new name prefix label and entry
new_name_label = tk.Label(root, text="New Name Prefix:")
new_name_label.pack(pady=5)
new_name_entry = tk.Entry(root, width=50)
new_name_entry.pack(pady=5)
  `;

  const codeSnippetStep2Part3 = `
# Function to rename files
def rename_files():
    folder_path = folder_entry.get()
    name_prefix = new_name_entry.get()
  `;

  const codeSnippetStep2Part4 = `
# Validate input
if not folder_path or not os.path.isdir(folder_path):
    messagebox.showerror("Error", "Please select a valid folder.")
    return
if not name_prefix:
    messagebox.showerror("Error", "Please enter a name prefix.")
    return
  `;

  const codeSnippetStep2Part5 = `
# Rename files in the folder
try:
    for count, filename in enumerate(os.listdir(folder_path), start=1):
        file_extension = os.path.splitext(filename)[1]  # Get file extension
        new_name = f"{name_prefix}_{count}{file_extension}"  # Create new name
  `;

  const codeSnippetStep2Part6 = `
src = os.path.join(folder_path, filename)
dst = os.path.join(folder_path, new_name)
  `;

  const codeSnippetStep2Part7 = `os.rename(src, dst)`;

  const codeSnippetStep2Part8 = `
except Exception as e:
    messagebox.showerror("Error", f"An error occurred: {e}")
  `;

  const codeSnippetStep2Part9 = `
rename_button = tk.Button(root, text="Rename Files", command=rename_files)
rename_button.pack(pady=20)
  `;

  const codeSnippetStep2Part10 = `root.mainloop()`;

  const codeSnippetStep2Part11 = `messagebox.showinfo("Success", "Files have been renamed successfully!")`;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Automate File Renaming with a Python GUI</h1>
      <p>
        The goal of this script is to automate the process of renaming files in a specific
        folder using a new naming pattern you provide.
      </p>

      <h2>Here’s what it means:</h2>

      <h3>Folder Path:</h3>
      <p>
        You’ll specify a folder on your computer that contains files you want to rename.
        For example, if you have a folder called VacationPhotos with files named
        like <em>IMG001.jpg, IMG002.jpg</em>, etc., you’d input the path to this folder in the script.
      </p>

      <h3>Renaming Pattern:</h3>
      <p>
        You provide a new name prefix (pattern) that you want to use for all files in that folder.
        For instance, if you enter <em>Vacation_2023</em> as the prefix, the script will rename
        each file in the folder to start with <em>Vacation_2023</em>, followed by a unique
        number to avoid name conflicts.
      </p>

      <h3>Result:</h3>
      <p>
        The script goes through each file in the folder and renames it according to the new pattern
        you provided. Using our example, if your folder has three photos, originally named
        <em> IMG001.jpg, IMG002.jpg,</em> and <em>IMG003.jpg</em>, they will be renamed to
        <em> Vacation_2023_1.jpg, Vacation_2023_2.jpg,</em> and <em>Vacation_2023_3.jpg</em>.
      </p>

      <h2>Example Walkthrough</h2>
      <p>
        Let’s say you want to rename all files in your folder named <em>Documents/Reports</em> so
        they have the prefix <em>Q3_Report</em>.
      </p>

      <ol>
        <li>Run the script. A small window (GUI) opens.</li>
        <li>Browse to select your folder or type the path directly. You’d enter <em>Documents/Reports</em>.</li>
        <li>Enter the new name prefix you want to use, such as <em>Q3_Report</em>.</li>
        <li>Click the Rename button.</li>
      </ol>

      <p>
        The script will rename every file in <em>Documents/Reports</em> to start with
        <em> Q3_Report</em>, followed by a unique number for each file.
      </p>

      <h3>After running the script, you’ll see the files named as:</h3>
      <ul>
        <li>Q3_Report_1.docx</li>
        <li>Q3_Report_2.docx</li>
        <li>Q3_Report_3.docx</li>
      </ul>

      <p>
        This automation can be helpful if you have a lot of files to rename in a consistent way
        without manually doing each one!
      </p>

      <h1>Step 1: Set Up Tkinter GUI</h1>
      <p>
        In this assignment, we'll set up the main Tkinter window and create components for:
        <ol>
          <li>An entry field to type or browse for the folder path.</li>
          <li>An entry field to specify the new file name prefix.</li>
          <li>A button to trigger the renaming process.</li>
        </ol>
      </p>

      <h2>Code and Explanation</h2>
      <p>1. <strong>Import Tkinter Library</strong>:</p>
      <CodeBlock code={`import tkinter as tk\nfrom tkinter import filedialog`} />
      <p>
        - <code>tkinter</code> is the library we use to create the GUI.<br />
        - <code>filedialog</code> allows us to open a dialog box to select a folder.
      </p>

      <p>2. <strong>Initialize the Tkinter Window</strong>:</p>
      <CodeBlock code={`root = tk.Tk()`} />
      <p>
        - <code>tk.Tk()</code> creates the main application window where our GUI elements (like buttons and text fields) will appear.<br />
        - We assign this window to the variable <code>root</code>, so we can refer to it throughout our code.
      </p>

      <p>3. <strong>Set the Window Title</strong>:</p>
      <CodeBlock code={`root.title("File Renamer Script")`} />
      <p>
        - <code>root.title("File Renamer Script")</code> sets the title of the window to "File Renamer Script." This title will appear at the top of the window.
      </p>

      <p>4. <strong>Set the Window Size</strong>:</p>
      <CodeBlock code={`root.geometry("400x300")`} />
      <p>
        - <code>root.geometry("400x300")</code> sets the width and height of the window. Here, we set it to be 400 pixels wide and 300 pixels high.
      </p>

      <p>5. <strong>Add a Label for Folder Path</strong>:</p>
      <CodeBlock code={`folder_label = tk.Label(root, text="Folder Path:")\nfolder_label.pack(pady=5)`} />
      <p>
        - <code>tk.Label(root, text="Folder Path:")</code> creates a label widget that displays the text "Folder Path:" in the window.<br />
        - <code>.pack(pady=5)</code> places the label in the window with some vertical padding (space) around it.
      </p>

      <p>6. <strong>Add an Entry Field for Folder Path</strong>:</p>
      <CodeBlock code={`folder_entry = tk.Entry(root, width=50)\nfolder_entry.pack(pady=5)`} />
      <p>
        - <code>tk.Entry(root, width=50)</code> creates an entry widget (a text box) where the user can type or see the folder path.<br />
        - <code>width=50</code> makes the entry box 50 characters wide.<br />
        - <code>.pack(pady=5)</code> places the entry field below the label, with some vertical padding.
      </p>

      <p>7. <strong>Define the Browse Function</strong>:</p>
      <CodeBlock
        code={`def browse_folder():\n    folder_path = filedialog.askdirectory()\n    folder_entry.delete(0, tk.END)\n    folder_entry.insert(0, folder_path)`}
      />
      <p>
        - <code>def browse_folder():</code> defines a function named <code>browse_folder</code>. This function will run when the "Browse" button is clicked.<br />
        - <code>filedialog.askdirectory()</code> opens a dialog box to select a folder and returns the selected path.<br />
        - <code>folder_entry.delete(0, tk.END)</code> clears any text currently in the <code>folder_entry</code> field.<br />
        - <code>folder_entry.insert(0, folder_path)</code> inserts the selected folder path into the <code>folder_entry</code> field.
      </p>

      <p>8. <strong>Add the Browse Button</strong>:</p>
      <CodeBlock
        code={`browse_button = tk.Button(root, text="Browse", command=browse_folder)\nbrowse_button.pack(pady=5)`}
      />
      <p>
        - <code>tk.Button(root, text="Browse", command=browse_folder)</code> creates a button with the label "Browse." <br />
        - <code>command=browse_folder</code> tells the button to call the <code>browse_folder</code> function when clicked.<br />
        - <code>.pack(pady=5)</code> places the button below the entry field, with some vertical padding.
      </p>

      <p>9. <strong>Add a Label for New Name Prefix</strong>:</p>
      <CodeBlock
        code={`name_label = tk.Label(root, text="New Name Prefix:")\nname_label.pack(pady=5)`}
      />
      <p>
        - <code>tk.Label(root, text="New Name Prefix:")</code> creates a label with the text "New Name Prefix:" so the user knows to enter the prefix.<br />
        - <code>.pack(pady=5)</code> places the label below the "Browse" button, with some vertical padding.
      </p>

      <p>10. <strong>Add an Entry Field for New Name Prefix</strong>:</p>
      <CodeBlock
        code={`name_entry = tk.Entry(root, width=50)\nname_entry.pack(pady=5)`}
      />
      <p>
        - <code>tk.Entry(root, width=50)</code> creates another entry field where the user can type the new name prefix.<br />
        - <code>.pack(pady=5)</code> places this entry field below the prefix label, with some vertical padding.
      </p>

      <p>11. <strong>Run the Tkinter Main Event Loop</strong>:</p>
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
      <CodeBlock code={codeSnippetStep1} />

      <p>
        Now that the GUI is ready, in the <strong>next step</strong>, we’ll implement the
        <strong>file renaming function</strong>. This function will take the folder path
        and name prefix from the entry fields and rename each file in the selected folder.
      </p>

      <h1>Step 2: Implementing the File Renaming Function</h1>
      <p>
        Now that the GUI is set up, let’s add the functionality to rename files in the selected folder. This function will:
      </p>
      <ol>
        <li>Retrieve the folder path and prefix for renaming from the entry fields.</li>
        <li>Validate the inputs to make sure they are correct.</li>
        <li>Rename each file in the folder based on the prefix and a unique number.</li>
      </ol>

      <hr />

      <h2>Code and Explanation</h2>

      <h3>1. Import Additional Libraries</h3>
      <CodeBlock code={`from tkinter import messagebox\nimport os`} />
      <p>
        - <code>messagebox</code> is used to show pop-up messages (like error or success messages) to the user.<br />
        - <code>os</code> is a built-in Python library for interacting with the operating system, such as handling files and directories.
      </p>

      <hr />

      <h3>2. Adding Components for the New Name Prefix</h3>
      <CodeBlock code={codeSnippetStep2Part2} />
     
      <p>
        - <code>tk.Label(root, text="New Name Prefix:")</code> creates a label with the text "New Name Prefix:" to inform the user about the purpose of the next entry field.<br />
        - <code>.pack(pady=5)</code> places the label in the window with some vertical space around it.<br />
        - <code>tk.Entry(root, width=50)</code> creates a text entry field where the user can type the new prefix for the file names.<br />
        - <code>.pack(pady=5)</code> places the entry field below the label with some space.
      </p>

      <hr />

      <h3>3. Creating the rename_files Function</h3>
      <CodeBlock  code={codeSnippetStep2Part3} />

      <p>
        - <code>def rename_files():</code> defines a new function named <code>rename_files</code> which will contain the code to rename files.<br />
        - <code>folder_entry.get()</code> retrieves the text from the folder path entry field and stores it in the variable <code>folder_path</code>.<br />
        - <code>new_name_entry.get()</code> retrieves the text from the new name prefix entry field and stores it in the variable <code>name_prefix</code>.
      </p>

      <hr />

      <h3>4. Validating User Input</h3>
      <CodeBlock code={codeSnippetStep2Part4} />

      <p>
        - <code>if not folder_path or not os.path.isdir(folder_path):</code> checks if the folder path is empty or if it’s not a valid directory.<br />
        - <code>messagebox.showerror("Error", "Please select a valid folder.")</code> displays an error message if the folder path is invalid.<br />
        - <code>return</code> exits the function if the folder path is invalid.<br />
        - <code>if not name_prefix:</code> checks if the prefix field is empty.<br />
        - <code>messagebox.showerror("Error", "Please enter a name prefix.")</code> displays an error message if the prefix is missing.<br />
        - <code>return</code> exits the function if no prefix is provided.
      </p>

      <hr />

      <h3>5. Renaming Files in the Selected Folder</h3>
      <CodeBlock code={codeSnippetStep2Part5} />
      <p>
        - <code>try:</code> starts a try block to handle potential errors in the renaming process.<br />
        - <code>for count, filename in enumerate(os.listdir(folder_path), start=1):</code> loops over each file in the specified folder.<br />
        - <code>enumerate(..., start=1)</code> assigns a unique number to each file, starting at 1.<br />
        - <code>file_extension = os.path.splitext(filename)[1]</code> extracts the file extension (like .txt, .jpg) from each file.<br />
        - <code>new_name = f"{'{'}name_prefix{'}'}_{'{'}count{'}'}{'{'}file_extension{'}'}"</code> creates a new name for each file using the specified prefix, the unique count, and the file’s original extension.
      </p>

      <hr />

      <h3>6. Define Source and Destination Paths</h3>
      <CodeBlock code={codeSnippetStep2Part6} />
      <p>
        - <code>src = os.path.join(folder_path, filename)</code> creates the full path of the current file (source path) by combining the folder path and the filename.<br />
        - <code>dst = os.path.join(folder_path, new_name)</code> creates the full path of the new file name (destination path).
      </p>

      <hr />

      <h3>7. Rename Each File</h3>
      <CodeBlock code={codeSnippetStep2Part7} />
      <p>- <code>os.rename(src, dst)</code> renames the file from its original name (<code>src</code>) to the new name (<code>dst</code>).</p>

      <hr />

      <h3>8. Show Success Message</h3>
      <CodeBlock code={codeSnippetStep2Part11} />
      <p>- <code>messagebox.showinfo("Success", "Files have been renamed successfully!")</code> displays a success message once all files have been renamed.</p>

      <hr />

      <h3>9. Handling Errors</h3>
      <CodeBlock code={codeSnippetStep2Part8} />
      <p>
        - <code>except Exception as e:</code> catches any error that occurs in the try block.<br />
        - <code>displays an error message with details of what went wrong.</code>
      </p>

      <hr />

      <h3>10. Adding the Rename Button</h3>
      <CodeBlock code={codeSnippetStep2Part9} />
      <p>
        - <code>tk.Button(root, text="Rename Files", command=rename_files)</code> creates a button labeled "Rename Files."<br />
        - <code>command=rename_files</code> tells the button to run the <code>rename_files</code> function when clicked.<br />
        - <code>.pack(pady=20)</code> places the button in the window with extra vertical padding for spacing.
      </p>

      <hr />

      <h3>11. Running the Tkinter Main Loop</h3>
      <CodeBlock code={codeSnippetStep2Part10} />
      <p>- <code>root.mainloop()</code> starts the main event loop, keeping the window open and responsive.</p>

      <h2>Summary of Step 2</h2>
      <p>
        In this step, we implemented the core functionality of our file renamer:
        <ul>
          <li>We created a function, <code>rename_files</code>, to retrieve the folder path and prefix from the user inputs.</li>
          <li>We validated the inputs to ensure the folder path is valid and the prefix is provided.</li>
          <li>We used a loop to rename each file in the folder, adding a unique number to each new file name.</li>
          <li>Finally, we added a button to trigger the <code>rename_files</code> function and provided success/error messages.</li>
        </ul>
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

import React from 'react';
import { Link } from 'react-router-dom';

const PythonAssignments = () => {
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
        For example, if you have a folder called <strong>VacationPhotos</strong> with files named
        like <em>IMG001.jpg, IMG002.jpg</em>, etc., you’d input the path to this folder in the script.
      </p>

      <h3>Renaming Pattern:</h3>
      <p>
        You provide a new name prefix (pattern) that you want to use for all files in that folder.
        For instance, if you enter <strong>Vacation_2023</strong> as the prefix, the script will rename
        each file in the folder to start with <strong>Vacation_2023</strong>, followed by a unique
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
        they have the prefix <strong>Q3_Report</strong>.
      </p>

      <ol>
        <li>Run the script. A small window (GUI) opens.</li>
        <li>Browse to select your folder or type the path directly. You’d enter <em>Documents/Reports</em>.</li>
        <li>Enter the new name prefix you want to use, such as <strong>Q3_Report</strong>.</li>
        <li>Click the Rename button.</li>
      </ol>

      <p>
        The script will rename every file in <em>Documents/Reports</em> to start with
        <strong> Q3_Report</strong>, followed by a unique number for each file.
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

      {/* Corrected Link Component */}
      <Link to="/Assignment">
        <div className="code-box">
          Toward code explanation...
        </div>
      </Link>
    </div>
  );
};

export default PythonAssignments;

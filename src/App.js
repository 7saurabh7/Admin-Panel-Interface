import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Products");

  const renderContent = () => {
    switch (selectedTab) {
      case "Products":
        return <ManageSection title="Manage Products" type="Product" />;
      case "Cases":
        return <ManageCases />;
      case "Contact":
        return <ManageContacts />;
      case "Blogs":
        return <ManageBlogs />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-panel">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">{renderContent()}</div>
    </div>
  );
}

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const tabs = ["Products", "Cases", "Contact", "Blogs"];

  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab}
            className={selectedTab === tab ? "active" : ""}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

const ManageCases = () => {
  return (
    <div className="manage-section">
      <h2>Manage Cases</h2>
      <label>Case ID</label>
      <input type="text" placeholder="Enter case ID" />

      <label>Case Name</label>
      <input type="text" placeholder="Enter case name" />

      <label>Case Status</label>
      <select>
        <option>Open</option>
        <option>In Progress</option>
        <option>Resolved</option>
      </select>

      <label>Assigned To</label>
      <input type="text" placeholder="Enter assignee name" />

      <label>Date Created</label>
      <input type="date" />

      <label>Case Description</label>
      <textarea placeholder="Enter case details"></textarea>

      <button>Save Case</button>
    </div>
  );
};

const ManageContacts = () => {
  return (
    <div className="manage-section">
      <h2>Manage Contacts</h2>
      <label>Full Name</label>
      <input type="text" placeholder="Enter full name" />

      <label>Email Address</label>
      <input type="email" placeholder="Enter email address" />

      <label>Phone Number</label>
      <input type="text" placeholder="Enter phone number" />

      <label>Company Name</label>
      <input type="text" placeholder="Enter company name (optional)" />

      <label>Message/Notes</label>
      <textarea placeholder="Enter additional details"></textarea>

      <button>Save Contact</button>
    </div>
  );
};

const ManageBlogs = () => {
  return (
    <div className="manage-section">
      <h2>Manage Blogs</h2>
      <label>Blog Title</label>
      <input type="text" placeholder="Enter blog title" />

      <label>Author Name</label>
      <input type="text" placeholder="Enter author's name" />

      <label>Publication Date</label>
      <input type="date" />

      <label>Blog Image</label>
      <input type="file" />

      <label>Content</label>
      <textarea placeholder="Write blog content here"></textarea>

      <button>Publish Blog</button>
    </div>
  );
};

const ManageSection = ({ title, type }) => {
  return (
    <div className="manage-section">
      <h2>{title}</h2>
      <label>{type} Name</label>
      <input type="text" placeholder={`Enter ${type} name`} />
      <label>{type} Image</label>
      <input type="file" />
      <label>{type} Description</label>
      <textarea placeholder={`Enter ${type} description`}></textarea>
      <button>Save</button>
    </div>
  );
};

export default App;

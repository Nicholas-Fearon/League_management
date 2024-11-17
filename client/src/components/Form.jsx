import { useState, useEffect } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const [fanMsg, setFanMsg] = useState([]); // Array to store all messages

  // Fetches messages and updates state
  const getMessages = async () => {
    try {
      const res = await fetch(
        "https://league-management.onrender.com/fanmessage"
      );
      const messages = await res.json();
      setFanMsg(messages); // Store messages in state
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        "https://league-management.onrender.com/fanmessage",
        {
          method: "POST",
          body: JSON.stringify(formObj),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!res.ok) {
        throw new Error("Error posting message");
      }

      const data = await res.json();
      console.log(data);

      setForm({ name: "", message: "" }); // Clear form after successful submission
      getMessages(); // Refresh messages after submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Function to delete a message
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://league-management.onrender.com/fanmessage/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        // Optimistically remove the deleted message from the UI
        setFanMsg((prevMessages) =>
          prevMessages.filter((msg) => msg.id !== id)
        );
      } else {
        const data = await res.json();
        alert(data.message || "Error deleting message");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <h1>Fan Posts!</h1>
      <form onSubmit={handleSubmit}>
        <label>Fan Name</label>
        <input
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={form.name}
        />

        <label>Message</label>
        <input
          name="message"
          placeholder="message"
          onChange={handleChange}
          value={form.message}
        />

        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>Fan Messages</h1>
        <ul>
          {fanMsg.map((msg) => (
            <li key={msg.id}>
              <strong>{msg.name}:</strong> {msg.message}
              <button onClick={() => handleDelete(msg.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

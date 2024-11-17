import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  //gets messages and inserts on page
  const getMessages = async () => {
    const res = await fetch("http://localhost:8080/fanmessage");
    const messages = await res.json();
    console.log(messages);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    setForm({ name: "", message: "" });
  }

  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    const newForm = { ...form, [key]: value };
    setForm(newForm);

    // or
    // setForm({ ...form, [event.target.name]: event.target.value });
  }
  getMessages();

  return (
    <div>
      <h1>Fan Posts!</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={form.setup}
        />

        <label>Message</label>
        <input
          name="message"
          placeholder="message"
          onChange={handleChange}
          value={form.punchline}
        />

        <button>Submit</button>
      </form>
      <p>Name: {form.name}</p>
      <p>Message: {form.message}</p>
    </div>
  );
}

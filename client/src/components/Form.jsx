import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

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
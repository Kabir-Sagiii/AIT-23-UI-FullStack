import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      //   background: "linear-gradient(135deg, #ea6666c4, #272524)",
      fontFamily: "Segoe UI, sans-serif",
      padding: "20px",
    },
    card: {
      display: "flex",
      width: "900px",
      maxWidth: "100%",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "#fff",
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    },
    left: {
      flex: 1,
      padding: "40px",
      color: "#fff",
      backgroundColor: "tomato",
      //   background: "linear-gradient(135deg, #4f46e5, #6366f1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    leftTitle: {
      fontSize: "28px",
      fontWeight: "600",
      marginBottom: "15px",
    },
    leftText: {
      fontSize: "15px",
      lineHeight: "1.6",
      opacity: 0.9,
    },
    contactInfo: {
      marginTop: "30px",
      fontSize: "14px",
      lineHeight: "1.8",
    },
    right: {
      flex: 1,
      padding: "40px",
    },
    formTitle: {
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "20px",
      color: "#333",
    },
    label: {
      fontSize: "14px",
      fontWeight: "500",
      marginBottom: "6px",
      display: "block",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "18px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      fontSize: "14px",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      height: "120px",
      marginBottom: "20px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      fontSize: "14px",
      resize: "none",
    },
    button: {
      width: "100%",
      padding: "14px",
      borderRadius: "6px",
      border: "none",
      backgroundColor: "tomato",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* LEFT SIDE */}
        <div style={styles.left}>
          <h2 style={styles.leftTitle}>Let’s Talk</h2>
          <p style={styles.leftText}>
            Have a question, project idea, or need support? Fill out the form
            and our team will reach out shortly.
          </p>

          <div style={styles.contactInfo}>
            📧 support@company.com <br />
            📞 +1 (234) 567-8901 <br />
            📍 New York, USA
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.right}>
          <h3 style={styles.formTitle}>Send us a message</h3>

          <form onSubmit={handleSubmit}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <label style={styles.label}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />

            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 LMS. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: { textAlign: "center", padding: "10px", backgroundColor: "#003366", color: "white", marginTop: "20px" }
};

export default Footer;
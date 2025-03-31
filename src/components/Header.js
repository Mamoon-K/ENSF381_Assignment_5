import React from "react";




function Header() {
  return (
    <div>
      <div >
        <nav style={styles.header}>
        <a href='/' style={styles.link}> Home </a>
        <a href='/login' style={styles.link}> Login </a>
        <a href='/Courses'  style={styles.link}> Courses </a>
        </nav>
      </div>
      
    </div>
  );
};



export default Header;

const styles = {
  header: { display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#003366", color: "white" },
  link: { margin: "0px 10px", color: "white", textDecoration: "none" }
};
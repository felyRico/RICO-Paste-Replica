import React from "react";

const Header = () => {
  return (
    <header
      id="header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "#fff",
        padding: "1rem 2rem",
        fontFamily: "sans-serif",
        zIndex: 999,
      }}
    >
      <div
        style={{
          maxWidth: "200vh",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 1px 1px 0 rgba(0,0,0,0.1)",
          padding: "0.5rem 1rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://framerusercontent.com/modules/hLuqQCS43wOS6vijmFSD/Nx7L85Z1Cd9FDx1OX7OT/assets/EPhoZwzfI0nbSVeXEefawWiZyVU.png"
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "1rem" }}
          />
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Paste 4.0</h1>
        </div>

        <button
          style={{
            background: "#0a84ff",
            color: "#fff",
            border: "none",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "20px",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#298dff")}
          onMouseOut={(e) => (e.target.style.background = "#0a84ff")}
        >
          Try for free
        </button>
      </div>
    </header>
  );
};

export default Header;

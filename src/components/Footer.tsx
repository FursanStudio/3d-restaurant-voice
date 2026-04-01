export default function Footer() {
  return (
    <footer style={{ background:"black", borderTop: "1px solid rgba(201,169,110,0.1)", padding: "3rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
      <div>
        <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", color: "#e8c98a", marginBottom: "0.4rem" }}>Kaah Restaurant</div>
        <div style={{ color: "#7a6e62", fontSize: "0.75rem", lineHeight: 1.8 }}>
          912 E 24th St d2, Minneapolis, MN 55404<br />
          reservations@kaahrestaurant.com · +1 (612) 872-5224
        </div>
      </div>
      <div style={{ color: "#7a6e62", fontSize: "0.75rem", textAlign: "center", lineHeight: 1.8 }}>
        Tue–Sun: 6:00 PM – 11:00 PM<br />Closed Mondays
      </div>
      <div style={{ color: "#7a6140", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
        © {new Date().getFullYear()} Kaah Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
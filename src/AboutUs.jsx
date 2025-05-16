import React from "react";

function AboutUs() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Learn More About Us!</h2>

      <p style={styles.paragraph}>
        Welcome to <strong>FreshBite Foods</strong> – your go-to destination for delicious, fresh, and high-quality food products. From sweet treats to daily essentials, we take pride in offering a wide variety of items to satisfy every taste and need.
      </p>

      <h3 style={styles.subHeading}>🍫 Chocolates</h3>
      <p style={styles.paragraph}>
        Indulge in our premium collection of handcrafted chocolates. Whether you love dark, milk, or nut-filled, we’ve got something to delight every chocolate lover.
      </p>

      <h3 style={styles.subHeading}>🥛 Milk Products</h3>
      <p style={styles.paragraph}>
        We provide farm-fresh milk, butter, ghee, curd, and more – all sourced from trusted local dairies. Our dairy products are pure, healthy, and perfect for your daily needs.
      </p>

      <h3 style={styles.subHeading}>🍗 Non-Veg Items</h3>
      <p style={styles.paragraph}>
        Our non-vegetarian section features fresh poultry, meat, and seafood, carefully selected for quality and hygiene. Enjoy taste and freshness in every bite.
      </p>

      <h3 style={styles.subHeading}>🥦 Veg Items</h3>
      <p style={styles.paragraph}>
        From organic greens to seasonal vegetables, our veg section is full of healthy options. Whether you're cooking traditional dishes or healthy recipes, we’ve got the freshest picks.
      </p>

      <p style={styles.footer}>
        At FreshBite Foods, we believe in quality, trust, and great taste. Thank you for choosing us!
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#fffbe6",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    color: "#2e2e2e",
    textAlign: "center",
    marginBottom: "20px",
  },
  subHeading: {
    color: "#654321",
    marginTop: "25px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#444",
  },
  footer: {
    marginTop: "30px",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "16px",
    color: "#222",
  },
};

export default AboutUs;

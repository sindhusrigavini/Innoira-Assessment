import { useState, useEffect } from "react";
// starters
import springRolls from "../assets/crispyspringrolls.jpeg";
import paneerTikka from "../assets/paneertikka.jpeg";
import stuffedMushrooms from "../assets/stuffedmushroms.jpg";

// soups
import hotAndSoup from "../assets/hotandsoup.jpeg";
import hotAndSourSoup from "../assets/hotandsoursoup.jpeg";
import mushroomCreamSoup from "../assets/mushroomcreamsoup.jpeg";

// main course
import dalMakhani from "../assets/dalmakhani.jpeg";
import chickenBiryani from "../assets/chickenbiriyani.jpeg";
import butterChicken from "../assets/butterchicken.jpeg";

// chef specials
import mughlaiFeast from "../assets/mughlaifeast.jpeg";
import thaliSpecial from "../assets/thalispecial.jpeg";
import tandooriPlatter from "../assets/tandooriplatter.jpeg";

// breads
import butterNaan from "../assets/butternaan.jpeg";
import garlicNaan from "../assets/garlicnaan.jpeg";
import lacchaParatha from "../assets/lacchaparatha.jpeg";

// beverages
import mangoLassi from "../assets/mangolassi.jpeg";
import masalaChai from "../assets/masalachai.jpeg";
import freshLimeSoda from "../assets/freshlimesoda.jpeg";

// desserts
import gulabJamun from "../assets/gulabjamun.jpg";
import rasmalai from "../assets/rasmalai.jpeg";
import brownie from "../assets/brownie.jpeg";

function MenuCard() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [activePage, setActivePage] = useState("menu"); // 👈 NEW
  const [showReserve, setShowReserve] = useState(false);
const [selectedSeats, setSelectedSeats] = useState(null);
const [reservationStep, setReservationStep] = useState("seats"); 
// "seats" | "details" | "done"

const [guestDetails, setGuestDetails] = useState({
  name: "",
  phone: "",
  email: ""
});
const [cartItems, setCartItems] = useState([]);
const [showCart, setShowCart] = useState(false);
const [showTablePrompt, setShowTablePrompt] = useState(false);
const [tableNumber, setTableNumber] = useState("");



  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <span className="logo-icon">🍽️</span>
            <div className="logo-text">
              <span className="title">Gourmet Delights</span>
              <small>Fine Dining Experience</small>
            </div>
          </div>

          <nav className="nav-section">
            <a
              className={activePage === "menu" ? "active" : ""}
              onClick={() => setActivePage("menu")}
            >
              Menu
            </a>

            <a
              className={activePage === "about" ? "active" : ""}
              onClick={() => setActivePage("about")}
            >
              About
            </a>

            <a
            className={activePage === "contact" ? "active" : ""}
            onClick={() => setActivePage("contact")}
          >
            Contact
          </a>


          <div
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            🛒
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </div>


          <button
            className="reserve-btn"
            onClick={() => setShowReserve(true)}
          >
            Reserve Table
          </button>

          </nav>
        </div>
        <div className="header-glow"></div>
      </header>

      {/* MAIN */}
      <main className="main-content">

        {/* MENU PAGE */}
        {activePage === "menu" && (
          <>
            {!open && (
                        <div className={`menu-card ${mounted ? "animate-in" : ""}`}>
            <div className="card-center">

              {/* WELCOME TEXT */}
              <div className="welcome-box">
                <h1 className="welcome-title">Welcome to </h1>
                <h2 className="welcome-brand">Gourmet Delights</h2>
                <p className="welcome-tagline">
                  Where flavors meet elegance ✨
                </p>
              </div>

              {/* PIZZA ICON */}
              <div className="pizza">🍕</div>

              <h3>Hot & Fresh</h3>

              <button className="open-btn" onClick={() => setOpen(true)}>
                Tap to Open
              </button>

            </div>
          </div>

            )}

            {open && (
              <section className="menu-page">
                <h1>Our Exquisite Menu</h1>

                <div className="menu-grid">
                  <MenuBox title="🥗 Starters" items={[
                    { img: springRolls, name: "Crispy Spring Rolls", price: "₹249" },
                    { img: paneerTikka, name: "Paneer Tikka", price: "₹299" },
                    { img: stuffedMushrooms, name: "Stuffed Mushrooms", price: "₹279" },
                  ]} setSelectedItem={setSelectedItem} setQuantity={setQuantity} />

                  <MenuBox title="🍲 Soups" items={[
                    { img: hotAndSoup, name: "Hot Soup", price: "₹179" },
                    { img: hotAndSourSoup, name: "Hot & Sour Soup", price: "₹189" },
                    { img: mushroomCreamSoup, name: "Mushroom Cream Soup", price: "₹199" },
                  ]} setSelectedItem={setSelectedItem} setQuantity={setQuantity} />

                  <MenuBox title="🍗 Main Course" items={[
                    { img: dalMakhani, name: "Dal Makhani", price: "₹329" },
                    { img: chickenBiryani, name: "Chicken Biryani", price: "₹399" },
                    { img: butterChicken, name: "Butter Chicken", price: "₹449" },
                  ]} setSelectedItem={setSelectedItem} setQuantity={setQuantity} />

                  <MenuBox title="👨‍🍳 Chef's Specials" items={[
                    { img: mughlaiFeast, name: "Mughlai Feast", price: "₹699" },
                    { img: thaliSpecial, name: "Thali Special", price: "₹599" },
                    { img: tandooriPlatter, name: "Tandoori Platter", price: "₹749" },
                  ]} setSelectedItem={setSelectedItem} setQuantity={setQuantity} />

                  <MenuBox title="🥖 Breads" items={[
                    { img: butterNaan, name: "Butter Naan", price: "₹59" },
                    { img: garlicNaan, name: "Garlic Naan", price: "₹79" },
                    { img: lacchaParatha, name: "Laccha Paratha", price: "₹69" },
                  ]} setSelectedItem={setSelectedItem} setQuantity={setQuantity} />

                  <MenuBox title="🥤 Beverages" items={[
                    { img: mangoLassi, name: "Mango Lassi", price: "₹99" },
                    { img: masalaChai, name: "Masala Chai", price: "₹49" },
                    { img: freshLimeSoda, name: "Fresh Lime Soda", price: "₹79" },
                  ]} setSelectedItem={setSelectedItem} setQuantity={setQuantity} />

                  <MenuBox title="🍰 Desserts" items={[
                    { img: gulabJamun, name: "Gulab Jamun", price: "₹149" },
                    { img: rasmalai, name: "Rasmalai", price: "₹169" },
                    { img: brownie, name: "Chocolate Brownie", price: "₹199" },
                  ]} setSelectedItem={setSelectedItem} setQuantity={setQuantity} />
                </div>
              </section>
            )}
          </>
        )}

        {/* ABOUT PAGE */}
        {activePage === "about" && (
          <section className="about-page">
            <section className="about-page">
              <p className="about-center">
              <strong>
                Welcome to Gourmet Delights — where every meal is a masterpiece.
              </strong>
            </p>
            <h1>🌟 About Gourmet Delights</h1>
            <br />
            
            <p>
              Gourmet Delights is not just a restaurant — it is a destination where
              passion for food meets the art of fine dining. Born from a love for
              authentic flavors and timeless recipes, Gourmet Delights was created
              to offer guests an unforgettable culinary journey, one plate at a time.
            </p>
            <br />
            <p>
              From the moment you step into Gourmet Delights, you are welcomed by an
              atmosphere that blends elegance, warmth, and comfort. Every detail —
              from the lighting to the table setting — is thoughtfully designed to
              create a space where memories are made, conversations flow, and
              flavors shine.
            </p>
            <br />
            <h2>🍲 Our Culinary Philosophy</h2>
            <br />
            <p>
              At Gourmet Delights, we believe that great food begins with great
              ingredients. That’s why we source only the freshest vegetables,
              premium spices, and high-quality produce. Our chefs follow a
              philosophy rooted in balance — balance between tradition and
              innovation, richness and subtlety, indulgence and nourishment.
            </p>
            <br />

            <p>
              Each dish is carefully crafted, not rushed. Recipes are perfected
              through experience, tasting, and love for the craft. Whether it’s a
              slow-cooked Dal Makhani, a perfectly spiced Paneer Tikka, or a
              handcrafted dessert, every item on our menu tells a story.
            </p>
            <br />

            <h2>👨‍🍳 Crafted by Passionate Chefs</h2>
            <br />

            <p>
              Our kitchen is led by chefs who bring years of culinary expertise and
              a deep respect for regional and global cuisines. They combine
              traditional cooking techniques with modern presentation to create
              dishes that are visually stunning and deeply satisfying.
            </p>
            <br />

            <ul>
              <li>Precision</li>
              <li>Creativity</li>
              <li>Authentic taste</li>
              <li>Consistent quality</li>
            </ul>
            <br />

            <h2>🥘 A Menu Designed for Every Mood</h2>
            <br />

            <p>
              The Gourmet Delights menu is thoughtfully curated to suit every palate
              and occasion:
            </p>
            <br />

            <ul>
              <li>Light starters to awaken your appetite</li>
              <li>Comforting soups to warm your soul</li>
              <li>Rich main courses that celebrate tradition</li>
              <li>Chef’s Specials for adventurous food lovers</li>
              <li>Refreshing beverages and indulgent desserts</li>
            </ul>
            <br />

            <p>
              Whether you are dining with family, celebrating a special moment, or
              enjoying a quiet meal alone, our menu offers something truly special
              for everyone.
            </p>
            <br />

            <h2>🕯️ Ambience That Elevates the Experience</h2>
            <br />

            <p>
              Fine dining is about more than food — it’s about how it makes you
              feel. Our interiors are designed to reflect calm sophistication,
              making Gourmet Delights the perfect setting for:
            </p>
            <br />

            <ul>
              <li>Family gatherings</li>
              <li>Romantic dinners</li>
              <li>Business meetings</li>
              <li>Celebrations & milestones</li>
            </ul>
            <br />

            <p>
              Soft lighting, comfortable seating, and a welcoming atmosphere ensure
              that every visit feels special.
            </p>
            <br />

            <h2>❤️ Our Promise to You</h2>
            <br />

            <ul>
              <li>Exceptional food</li>
              <li>Impeccable service</li>
              <li>A memorable dining experience</li>
            </ul>
            <br />

            <p>
              We don’t just serve meals — we serve moments. Moments of joy, comfort,
              and indulgence that stay with you long after the last bite.
            </p>
            <br />

            <h2>🌍 A Place Where Food Brings People Together</h2>
            <br />

            <p>
              Food has the power to connect people, cultures, and emotions. At
              Gourmet Delights, we celebrate that connection every single day. We
              invite you to slow down, savor the flavors, and enjoy the experience
              we’ve created just for you.
            </p>
            <br />

          </section>

          </section>
        )}
        {/* CONTACT PAGE */}
      {activePage === "contact" && (
        <section className="contact-page">

          <h1>📞 Contact Gourmet Delights</h1>

          <p className="contact-intro">
            We’d love to hear from you! Whether you have a question, feedback,
            or would like to reserve a table, feel free to reach out to us.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <h3>📍 Address</h3>
              <p>
                Gourmet Delights Restaurant<br />
                2nd Floor, Sapphire Plaza<br />
                MG Road, Indiranagar<br />
                Bengaluru, Karnataka – 560038
              </p>
            </div>

            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>
                +91 98765 43210<br />
                +91 91234 56789
              </p>
            </div>

            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>
                reservations@gourmetdelights.com<br />
                support@gourmetdelights.com
              </p>
            </div>

            <div className="contact-item">
              <h3>🕒 Opening Hours</h3>
              <p>
                Monday – Friday: 11:00 AM – 11:00 PM<br />
                Saturday – Sunday: 10:00 AM – 12:00 AM
              </p>
            </div>
          </div>

          <p className="contact-footer">
            <strong>
              We look forward to welcoming you at Gourmet Delights — where every
              visit is a memorable experience.
            </strong>
          </p>

        </section>
      )}
      


      </main>
      {/* RESERVE TABLE MODAL */}
{showReserve && (
  <div className="modal-backdrop">
    <div className="modal reserve-modal">

      <button
        className="close-btn"
        onClick={() => {
          setShowReserve(false);
          setSelectedSeats(null);
          setReservationStep("seats");
          setGuestDetails({ name: "", phone: "", email: "" });
        }}
      >
        ✕
      </button>

      {/* STEP 1: SELECT SEATS */}
      {reservationStep === "seats" && (
        <>
          <h2 style={{ textAlign: "center" }}>🍽️ Reserve a Table</h2>
          <p style={{ textAlign: "center", marginBottom: "20px" }}>
            Select number of seats
          </p>

          <div className="table-options">
            {[2, 4, 6, 8].map(seats => (
              <div
                key={seats}
                className={`table-card ${
                  selectedSeats === seats ? "selected" : ""
                }`}
                onClick={() => setSelectedSeats(seats)}
              >
                <div className="chair-icon">🪑</div>
                <span>{seats} Seats</span>
              </div>
            ))}
          </div>

          <button
            className="add-cart"
            disabled={!selectedSeats}
            onClick={() => setReservationStep("details")}
          >
            Confirm Reservation
          </button>
        </>
      )}

      {/* STEP 2: ENTER DETAILS */}
      {reservationStep === "details" && (
        <>
          <h2 style={{ textAlign: "center" }}>📝 Enter Your Details</h2>

          <div className="reserve-form">
            <input
              type="text"
              placeholder="Full Name"
              value={guestDetails.name}
              onChange={e =>
                setGuestDetails({ ...guestDetails, name: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={guestDetails.phone}
              onChange={e =>
                setGuestDetails({ ...guestDetails, phone: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email (optional)"
              value={guestDetails.email}
              onChange={e =>
                setGuestDetails({ ...guestDetails, email: e.target.value })
              }
            />
          </div>

          <button
            className="add-cart"
            disabled={!guestDetails.name || !guestDetails.phone}
            onClick={() => setReservationStep("done")}
          >
            Submit Details
          </button>
        </>
      )}

      {/* STEP 3: CONFIRMATION */}
      {reservationStep === "done" && (
        <>
          <h2 style={{ textAlign: "center" }}>✅ Reservation Confirmed</h2>

          <p style={{ textAlign: "center", marginTop: "12px" }}>
            Thank you <strong>{guestDetails.name}</strong>!  
            <br />
            Your table for <strong>{selectedSeats} people</strong> has been reserved.
          </p>

          <button
            className="add-cart"
            onClick={() => {
              setShowReserve(false);
              setSelectedSeats(null);
              setReservationStep("seats");
              setGuestDetails({ name: "", phone: "", email: "" });
            }}
          >
            Done
          </button>
        </>
      )}

    </div>
  </div>
)}
{/* CART MODAL */}
{showCart && (
  <div className="modal-backdrop">
    <div className="modal cart-modal">

      <button
        className="close-btn"
        onClick={() => setShowCart(false)}
      >
        ✕
      </button>

      <h2 style={{ textAlign: "center" }}>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Your cart is empty
        </p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, i) => (
              <div className="cart-row" key={i}>
                <span>{item.name}</span>
                <span>
                  ₹{item.price} × {item.qty}
                </span>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <strong>Total:</strong>
            <strong>
              ₹{cartItems.reduce(
                (sum, item) => sum + item.price * item.qty,
                0
              )}
            </strong>
          </div>

                <button
        className="add-cart"
        onClick={() => setShowTablePrompt(true)}
      >
        Order
      </button>

        </>
      )}
    </div>
  </div>
)}
      

      {/* MODAL */}
      {selectedItem && (
        <div className="modal-backdrop">
          <div className="modal">
            <button
              className="close-btn"
              onClick={() => {
                setSelectedItem(null);
                setQuantity(1);
              }}
            >
              ✕
            </button>

            <img src={selectedItem.img} alt={selectedItem.name} />
            <h2>{selectedItem.name}</h2>

            <div className="quantity">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>

            <button
            className="add-cart"
            onClick={() => {
              setCartItems(prev => {
                const existing = prev.find(i => i.name === selectedItem.name);

                if (existing) {
                  return prev.map(i =>
                    i.name === selectedItem.name
                      ? { ...i, qty: i.qty + quantity }
                      : i
                  );
                }

                return [
                  ...prev,
                  {
                    name: selectedItem.name,
                    price: Number(selectedItem.price.replace("₹", "")),
                    qty: quantity
                  }
                ];
              });

              setCartCount(c => c + quantity);
              setSelectedItem(null);
              setQuantity(1);
            }}
          >
            🛒 Add to Cart
          </button>
            <button className="continue" onClick={() => setSelectedItem(null)}>
              Continue Browsing
            </button>
          </div>
        </div>
      )}
      {/* TABLE NUMBER MODAL */}
{showTablePrompt && (
  <div className="modal-backdrop">
    <div className="modal">

      <button
        className="close-btn"
        onClick={() => {
          setShowTablePrompt(false);
          setTableNumber("");
        }}
      >
        ✕
      </button>

      <h2 style={{ textAlign: "center" }}>🍽️ Enter Table Number</h2>

      <input
        type="number"
        placeholder="Table Number"
        value={tableNumber}
        onChange={e => setTableNumber(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          marginTop: "20px",
          border: "none"
        }}
      />

      <button
        className="add-cart"
        style={{ marginTop: "20px" }}
        disabled={!tableNumber}
        onClick={() => {
          alert(
            `✅ Order placed!\nTable No: ${tableNumber}\nTotal: ₹${cartItems.reduce(
              (sum, item) => sum + item.price * item.qty,
              0
            )}`
          );

          setShowTablePrompt(false);
          setShowCart(false);
          setCartItems([]);
          setCartCount(0);
          setTableNumber("");
        }}
      >
        Confirm Order
      </button>

    </div>
  </div>
)}
    </>
  );
}

function MenuBox({ title, items, setSelectedItem, setQuantity }) {
  return (
    <div className="menu-box">
      <h3>{title}</h3>

      <div className="menu-scroll">
        <div className="menu-track">
          {[...items, ...items].map((item, i) => (
            <div className="menu-item" key={i}>
              <div
                className="image-wrapper"
                onClick={() => {
                  setSelectedItem(item);
                  setQuantity(1);
                }}
              >
                <img src={item.img} alt={item.name} />
                <div className="overlay">View</div>
              </div>

              <div className="menu-info">
                <span className="item-name">{item.name}</span>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuCard;



import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bijiliImg from "./assets/bijili.jpg";
import lakshmiImg from "./assets/lakshmi.jpg";
import atomImg from "./assets/atom-bomb.jpg";
import rocketImg from "./assets/rockets.jpg";
import chakkarImg from "./assets/ground-chakkar.jpg";
import fountainImg from "./assets/fountain.jpg";
import whistleImg from "./assets/whistling-rocket.jpg";
import sparklerImg from "./assets/sparklers.jpg";
import heroImg from "./assets/hero.jpg";
import heroImg2 from "./assets/hero-2.jpg";
import heroImg3 from "./assets/hero-3.jpg";
import aboutImg from "./assets/about.jpg";
import offerImg from "./assets/offers.jpg";

const products = [
  {
    id: 1,
    name: "Bijili Crackers",
    category: "Sound Crackers",
    price: 150,
    oldPrice: 200,
    image: bijiliImg,
    description: "Traditional crackers for festive celebrations.",
    tag: "POPULAR",
  },
  {
    id: 2,
    name: "Lakshmi Crackers",
    category: "Sound Crackers",
    price: 200,
    oldPrice: 260,
    image: lakshmiImg,
    description: "A classic festive favourite.",
    tag: "BESTSELLER",
  },
  {
    id: 3,
    name: "Atom Bomb",
    category: "Bomb Crackers",
    price: 180,
    oldPrice: 230,
    image: atomImg,
    description: "A traditional sound cracker collection.",
    tag: "SPECIAL",
  },
  {
    id: 4,
    name: "Colour Rockets",
    category: "Sky Crackers",
    price: 300,
    oldPrice: 380,
    image: rocketImg,
    description: "Colourful sky effects for festive nights.",
    tag: "TRENDING",
  },
  {
    id: 5,
    name: "Ground Chakkar Big",
    category: "Ground Crackers",
    price: 160,
    oldPrice: 210,
    image: chakkarImg,
    description: "A classic spinning ground cracker.",
    tag: "POPULAR",
  },
  {
    id: 6,
    name: "Peacock Fountain",
    category: "Fountains",
    price: 320,
    oldPrice: 400,
    image: fountainImg,
    description: "A fountain-style addition to your celebration.",
    tag: "PREMIUM",
  },
  {
    id: 7,
    name: "Whistling Rockets",
    category: "Sky Crackers",
    price: 280,
    oldPrice: 350,
    image: whistleImg,
    description: "A rocket-style festive product.",
    tag: "NEW",
  },
  {
    id: 8,
    name: "Deluxe Sparklers",
    category: "Sparklers",
    price: 180,
    oldPrice: 240,
    image: sparklerImg,
    description: "Sparklers for festive occasions.",
    tag: "HOT DEAL",
  },
];

const categories = [
  { name: "All Products", image: bijiliImg },
  { name: "Sparklers", image: sparklerImg },
  { name: "Ground Crackers", image: chakkarImg },
  { name: "Sky Crackers", image: rocketImg },
  { name: "Fountains", image: fountainImg },
  { name: "Sound Crackers", image: lakshmiImg },
];

const slides = [
  {
    eyebrow: "WELCOME TO SPARKZ",
    title: "Light Up Your",
    highlight: "Happiness.",
    description:
      "Explore our festive collections and find something special for your celebration.",
    image: heroImg,
    button: "Explore Collection",
  },
  {
    eyebrow: "CELEBRATE EVERY MOMENT",
    title: "Make Every",
    highlight: "Moment Shine.",
    description:
      "Discover our favourite collections and special festive offers.",
    image: heroImg2,
    button: "Shop Products",
  },
  {
    eyebrow: "THE FESTIVE COLLECTION",
    title: "Celebrate In",
    highlight: "Brilliant Style.",
    description:
      "Browse our products and plan your next celebration.",
    image: heroImg3,
    button: "View Collection",
  },
];

const faqs = [
  {
    question: "How can I find a product?",
    answer:
      "Choose a category or enter a product name in the search bar.",
  },
  {
    question: "Can I add more than one product?",
    answer:
      "Yes. Add products to your cart and change their quantities whenever you need.",
  },
  {
    question: "How can I contact SPARKZ?",
    answer:
      "Use the contact form to prepare an enquiry in your email application.",
  },
  {
    question: "Are the prices final?",
    answer:
      "The displayed prices are sample prices. Confirm the final price and availability with the seller.",
  },
];

const money = (amount) => `₹${amount.toLocaleString("en-IN")}`;

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((value) => Math.min(value + 10, 100));
    }, 120);

    const loaderTimer = setTimeout(() => {
      setProgress(100);
      setLoading(false);
    }, 1500);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  useEffect(() => {
    if (loading) return;

    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
    });

    AOS.refresh();
  }, [loading]);

  useEffect(() => {
    if (loading) return;

    const timer = setInterval(() => {
      setActiveSlide((value) => (value + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [loading]);

  useEffect(() => {
    if (!notice) return;

    const timer = setTimeout(() => setNotice(""), 2500);
    return () => clearTimeout(timer);
  }, [notice]);

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addToCart = (product) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);

      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });

    setNotice(`${product.name} added to cart`);
  };

  const updateQuantity = (id, amount) => {
    setCart((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
    setNotice("Product removed from cart");
  };

  const showProducts = (category = "All Products") => {
    setActiveCategory(category);
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const contactEmail = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const body =
      `Name: ${name}\nEmail: ${contactEmail}\n\nMessage:\n${message}`;

    window.location.href =
      `mailto:hello@crackersshop.example` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setNotice("Opening your email application");
  };

  const handleNewsletter = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setEmail("");
    setNotice("Thank you for subscribing!");
  };

  const sendCartEnquiry = () => {
    if (cart.length === 0) return;

    const orderLines = cart
      .map(
        (item) =>
          `${item.name} x ${item.quantity} - ${money(
            item.price * item.quantity
          )}`
      )
      .join("\n");

    const body =
      `SPARKZ Cart Enquiry\n\n${orderLines}` +
      `\n\nEstimated total: ${money(cartTotal)}`;

    window.location.href =
      `mailto:hello@crackersshop.example` +
      `?subject=${encodeURIComponent("SPARKZ Cart Enquiry")}` +
      `&body=${encodeURIComponent(body)}`;

    setNotice("Opening your email application");
  };

  if (loading) {
    return (
      <div className="sparkz-loader">
        <div className="loader-content">
          <h1>
            SPAR<span>KZ</span>
          </h1>

          <p>LIGHT UP YOUR HAPPINESS</p>

          <div className="loader-progress">
            <span style={{ width: `${progress}%` }} />
          </div>

          <div className="loader-progress-text">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    );
  }

  const currentSlide = slides[activeSlide];

  return (
    <div className="crackers-app">
      {notice && (
        <div className="toast-notice" role="status">
          {notice}
        </div>
      )}

      <div className="announcement-bar">
        <span>WELCOME TO SPARKZ</span>
        <span>Make Every Celebration Special</span>
        <a href="#products">Shop Now ↗</a>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand-logo">
            <span className="brand-name">
              SPARKZ
              <small>LIGHT UP YOUR HAPPINESS</small>
            </span>
          </a>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-navigation ${menuOpen ? "nav-open" : ""}`}>
            {[
              ["Home", "#home"],
              ["Collections", "#categories"],
              ["Products", "#products"],
              ["Offers", "#offers"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <label className="header-search">
              <span>⌕</span>
              <input
                type="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setActiveCategory("All Products");
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") showProducts();
                }}
                placeholder="Search products..."
                aria-label="Search products"
              />
            </label>

            <a href="#cart" className="cart-icon-button">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{cartCount}</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div
            className="hero-slide active"
            style={{
              "--hero-image": `url("${currentSlide.image}")`,
            }}
          >
            <div className="hero-overlay" />

            <div className="container hero-content">
              <div className="hero-copy">
                <span className="eyebrow">{currentSlide.eyebrow}</span>

                <h1>
                  {currentSlide.title}
                  <br />
                  <span>{currentSlide.highlight}</span>
                </h1>

                <p>{currentSlide.description}</p>

                <div className="hero-buttons">
                  <button
                    className="button button-primary"
                    onClick={() => showProducts()}
                  >
                    {currentSlide.button} ↗
                  </button>

                  <a href="#about" className="button button-outline">
                    About Us
                  </a>
                </div>

                <div className="hero-stats">
                  <div>
                    <strong>08+</strong>
                    <span>Products</span>
                  </div>
                  <div>
                    <strong>06</strong>
                    <span>Categories</span>
                  </div>
                  <div>
                    <strong>100%</strong>
                    <span>Festive Spirit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-controls">
              <button
                className="carousel-arrow"
                aria-label="Previous slide"
                onClick={() =>
                  setActiveSlide(
                    (activeSlide - 1 + slides.length) % slides.length
                  )
                }
              >
                ←
              </button>

              <div className="carousel-dots">
                {slides.map((slide, index) => (
                  <button
                    key={slide.eyebrow}
                    aria-label={`Go to slide ${index + 1}`}
                    className={activeSlide === index ? "active" : ""}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>

              <button
                className="carousel-arrow"
                aria-label="Next slide"
                onClick={() =>
                  setActiveSlide((activeSlide + 1) % slides.length)
                }
              >
                →
              </button>
            </div>
          </div>
        </section>

        <section className="features-strip">
          <div className="container features-grid">
            {[
              ["✦", "Festive Collections", "Products for special"],
              ["◇", "Easy Shopping", "Browse products"],
              ["✧", "Special Offers", "Explore selected deals"],
              ["♡", "Safety First", "Safety instructions"],
            ].map(([icon, title, text]) => (
              <div className="feature-item" key={title} data-aos="fade-up">
                <span className="feature-icon">{icon}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section categories-section" id="categories">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <span className="eyebrow">OUR COLLECTION</span>
              <h2>
                Shop By <span>Category</span>
              </h2>
              <p>Choose a category to explore our products.</p>
            </div>

            <div className="category-grid">
              {categories.map((category, index) => (
                <button
                  className="category-card"
                  key={category.name}
                  onClick={() => showProducts(category.name)}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                >
                  <img src={category.image} alt={category.name} loading="lazy" />
                  <span className="category-shade" />
                  <span className="category-card-content">
                    <small>EXPLORE</small>
                    <strong>{category.name}</strong>
                    <span className="category-arrow">↗</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="products-heading-row">
              <div className="section-heading section-heading-left">
                <span className="eyebrow">SPARKZ COLLECTION</span>
                <h2>
                  Our <span>Products</span>
                </h2>
                <p>Find your favourites and add them to your cart.</p>
              </div>

              <label className="product-search">
                <span>⌕</span>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Find a product..."
                  aria-label="Find a product"
                />
              </label>
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={
                    activeCategory === category.name ? "filter-active" : ""
                  }
                  onClick={() => setActiveCategory(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <article
                  className="product-card"
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 60}
                >
                  <div className="product-image-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                    <span className="product-tag">{product.tag}</span>
                    <button
                      className="quick-add"
                      onClick={() => addToCart(product)}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      +
                    </button>
                  </div>

                  <div className="product-info">
                    <span className="product-category">
                      {product.category}
                    </span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>

                    <div className="product-card-bottom">
                      <div className="product-prices">
                        <strong>{money(product.price)}</strong>
                        <del>{money(product.oldPrice)}</del>
                      </div>

                      <button
                        className="add-cart-button"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart +
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="empty-search">
                <h3>No products found</h3>
                <p>Try another product name or category.</p>
                <button
                  className="button button-primary"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All Products");
                  }}
                >
                  View All Products
                </button>
              </div>
            )}

            
          </div>
        </section>

        <section className="promo-section" id="offers">
          <div className="container">
            <div className="promo-banner" data-aos="fade-up">
              <div className="promo-content">
                <span className="eyebrow">SPECIAL COLLECTION</span>
                <h2>
                  Make Your Celebration
                  <br />
                  <span>Extra Special.</span>
                </h2>
                <p>
                  Explore our collection and find products for your celebrations.
                </p>
                <button
                  className="button button-light"
                  onClick={() => showProducts()}
                >
                  Explore Products ↗
                </button>
              </div>

              <div className="promo-image">
                <img src={offerImg} alt="Festive cracker collection" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual" data-aos="fade-right">
              <div className="about-image-main">
                <img src={aboutImg} alt="Festive cracker collection" loading="lazy" />
              </div>
              <div className="about-badge">
                <span>MADE FOR</span>
                <strong>HAPPY</strong>
                <span>MOMENTS</span>
              </div>
            </div>

            <div className="about-content" data-aos="fade-left">
              <span className="eyebrow">ABOUT SPARKZ</span>
              <h2>
                Every Celebration
                <br />
                Has A <span>Story.</span>
              </h2>
              <p>
                SPARKZ brings our cracker collections together in one place.
                Browse products, compare prices and choose what you need.
              </p>
              <p>
                Our website makes it easy to explore different categories and
                keep your selected products in one cart.
              </p>

              <div className="about-points">
                <div>
                  <span>01</span>
                  <p>
                    <strong>Easy Shopping</strong>
                    Find products by category.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <strong>Simple Cart</strong>
                    Review your selected products.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <strong>Celebrate Safely</strong>
                    Follow product safety instructions.
                  </p>
                </div>
              </div>

              <a href="#products" className="text-link">
                Explore Products ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <span className="eyebrow">WHY SPARKZ</span>
              <h2>
                Made For Your <span>Celebrations.</span>
              </h2>
              <p>Everything you need to browse our collection.</p>
            </div>

            <div className="why-grid">
              {[
  ["Easy Search", "Find products by name or category."],
  ["Product Choices", "Browse different cracker collections."],
  ["Simple Cart", "Update quantities and check totals."],
  ["Safety First", "Follow all local safety requirements."],
].map(([title, description]) => (
  <div className="why-card" key={title} data-aos="fade-up">
    <div className="why-card-top">
     
    </div>

    <h3>{title}</h3>
    <p>{description}</p>
    <span className="why-line" />
  </div>
))}
            </div>
          </div>
        </section>

        <section className="section testimonials-section" id="reviews">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <span className="eyebrow">CUSTOMER REVIEWS</span>
              <h2>
                What People <span>Say.</span>
              </h2>
              <p>Sample reviews for the website design.</p>
            </div>

            <div className="testimonial-grid">
              {[
                {
                  quote: "The product categories are easy to browse.",
                  name: "Uday",
                  location: "Krishnagiri",
                },
                {
                  quote: "I can find products and check the cart easily.",
                  name: "Viki",
                  location: "Erode",
                },
                {
                  quote: "The website is simple and easy to use.",
                  name: "Nisha",
                  location: "Chennai",
                },
              ].map((review) => (
                <article className="testimonial-card" key={review.name} data-aos="fade-up">
                  <div className="review-stars">★★★★★</div>
                  
                  <p>{review.quote}</p>
                  <div className="review-author">
                    <div className="review-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.location}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro" data-aos="fade-right">
              <span className="eyebrow">NEED HELP?</span>
              <h2>
                Frequently Asked <span>Questions.</span>
              </h2>
              <p>Here are some answers to common shopping questions.</p>
              <a href="#contact" className="text-link">
                Contact Us ↗
              </a>
            </div>

            <div className="faq-list" data-aos="fade-left">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${openFaq === index ? "faq-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter-section">
          <div className="container newsletter-inner" data-aos="fade-up">
            <div>
              <span className="eyebrow">STAY UPDATED</span>
              <h2>
                Get Our Latest <span>Updates.</span>
              </h2>
              <p>Enter your email for collection updates.</p>
            </div>

            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit">Subscribe ↗</button>
              <small>
                Demo form. Email addresses are not stored on a server.
              </small>
            </form>
          </div>
        </section>

        <section className="section cart-section" id="cart">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <span className="eyebrow">YOUR SELECTION</span>
              <h2>
                Shopping <span>Cart.</span>
              </h2>
              <p>Check your products and estimated total.</p>
            </div>

            <div className="cart-layout">
              <div className="cart-items-panel" data-aos="fade-right">
                <div className="cart-panel-heading">
                  <h3>Your Items</h3>
                  <span>{cartCount} items</span>
                </div>

                {cart.length === 0 ? (
                  <div className="cart-empty">
                    <div className="cart-empty-icon">🛒</div>
                    <h3>Your cart is empty</h3>
                    <p>Add products from the collection to get started.</p>
                    <button
                      className="button button-primary"
                      onClick={() => showProducts()}
                    >
                      Explore Products ↗
                    </button>
                  </div>
                ) : (
                  <div className="cart-items-list">
                    {cart.map((item) => (
                      <article className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} loading="lazy" />

                        <div className="cart-item-info">
                          <span>{item.category}</span>
                          <h4>{item.name}</h4>
                          <strong>{money(item.price)}</strong>
                        </div>

                        <div className="quantity-control">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            +
                          </button>
                        </div>

                        <div className="cart-item-end">
                          <strong>
                            {money(item.price * item.quantity)}
                          </strong>
                          <button
                            className="remove-item"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              <aside className="cart-summary-panel" data-aos="fade-left">
                <span className="eyebrow">ORDER DETAILS</span>
                <h3>Cart Summary</h3>

                <div className="summary-row">
                  <span>Items</span>
                  <strong>{cartCount}</strong>
                </div>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>{money(cartTotal)}</strong>
                </div>
                <div className="summary-row">
                  <span>Delivery</span>
                  <strong>To be confirmed</strong>
                </div>

                <div className="summary-divider" />

                <div className="summary-total">
                  <span>Estimated Total</span>
                  <strong>{money(cartTotal)}</strong>
                </div>

                <p className="summary-disclaimer">
                  Final prices and delivery details must be confirmed with
                  the seller.
                </p>

                <button
                  className="button button-primary checkout-button"
                  disabled={cart.length === 0}
                  onClick={sendCartEnquiry}
                >
                  Send Cart Enquiry ↗
                </button>

                <button
                  className="continue-shopping"
                  onClick={() => showProducts()}
                >
                  ← Continue Shopping
                </button>

                <div className="cart-secure-note">
                  <p>No payment is collected on this demo website.</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-info" data-aos="fade-right">
              <span className="eyebrow">CONTACT US</span>
              <h2>
                We'd Love To
                <br />
                <span>Hear From You.</span>
              </h2>
              <p>
                Have a question about a product? Send us an enquiry using
                the form.
              </p>

              <div className="contact-detail">
                <span className="contact-detail-icon">✉</span>
                <div>
                  <small>EMAIL US</small>
                  <strong>uday@crackersshop.example</strong>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon">◷</span>
                <div>
                  <small>BUSINESS HOURS</small>
                  <strong>Contact for timings</strong>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon">⌖</span>
                <div>
                  <small>OUR LOCATION</small>
                  <strong>Puliyampatti, Pochampalli, Krishnagiri</strong>
                </div>
              </div>

              <div className="contact-socials">
                
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleContactSubmit}
              data-aos="fade-left"
            >
              <div className="contact-form-heading">
                <span className="eyebrow">SEND A MESSAGE</span>
                <h3>Drop Us A Message.</h3>
                <p>Fill in your details to prepare an email enquiry.</p>
              </div>

              <div className="form-row">
                <label>
                  Your Name
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                  />
                </label>
                <label>
                  Email Address
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                  />
                </label>
              </div>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Enter a subject"
                />
              </label>

              <label>
                Your Message
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message"
                />
              </label>

              <button
                className="button button-primary contact-submit"
                type="submit"
              >
                Prepare Email ↗
              </button>

              <small className="form-note">
                Update the demo recipient email before publishing.
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand-logo">
              <span className="brand-name">
                SPARKZ
                <small>LIGHT UP YOUR HAPPINESS</small>
              </span>
            </a>
            <p>
              Browse our festive collections and find products for your
              celebrations. Always follow safety instructions and local rules.
            </p>
            <a href="#products" className="footer-explore">
              Explore Products ↗
            </a>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#offers">Offers</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-column">
            <h3>Customer Area</h3>
            <a href="#cart">Shopping Cart</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQs</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>
            <p>uday@crackersshop.example</p>
            <p>Puliyampatti, Pochampalli, Krishnagiri</p>
            <a href="#contact" className="footer-contact-link">
              Contact Us ↗
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} SPARKZ. All rights reserved.</p>
          <p className="footer-made">MADE FOR CELEBRATION ✦</p>
          <a href="#home" className="back-to-top">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

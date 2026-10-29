import React, { useEffect, useMemo, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
  const products = [
  {
    id: 1,
    name: "Bijili Crackers",
    category: "Sound Crackers",
    price: 150,
    oldPrice: 200,
    image:
      "https://img1.exportersindia.com/product_images/bc-full/2021/7/4735183/bijili-crackers-1626943499-5908346.jpeg",
    description: "Traditional crackers for festive celebrations.",
    tag: "POPULAR",
  },
  {
    id: 2,
    name: "Lakshmi Crackers",
    category: "Sound Crackers",
    price: 200,
    oldPrice: 260,
    image:
      "https://4.imimg.com/data4/NV/ND/MY-5161495/4-deluxe-lakshmi-cracker-500x500.jpg",
    description: "A classic festive favourite.",
    tag: "BESTSELLER",
  },
  {
    id: 3,
    name: "Atom Bomb",
    category: "Bomb Crackers",
    price: 180,
    oldPrice: 230,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.wREl02J0S_bhl7VPb3YMGQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Traditional sound cracker collection.",
    tag: "SPECIAL",
  },
  {
    id: 4,
    name: "Colour Rockets",
    category: "Sky Crackers",
    price: 300,
    oldPrice: 380,
    image:
      "https://fireburstfireworks.co.uk/buy-fireworks/wp-content/uploads/2019/09/Siren-1-768x768.jpg",
    description: "Colourful sky effects for festive nights.",
    tag: "TRENDING",
  },
  {
    id: 5,
    name: "Ground Chakkar Big",
    category: "Ground Crackers",
    price: 160,
    oldPrice: 210,
    image:
      "https://oscrackers.in/wp-content/uploads/2021/08/GC-small-image-2.jpg",
    description: "A classic spinning ground cracker.",
    tag: "POPULAR",
  },
  {
    id: 6,
    name: "Peacock Fountain",
    category: "Fountains",
    price: 320,
    oldPrice: 400,
    image:
      "https://th.bing.com/th/id/R.562a81f3a44cc59621465a935b497a2f?rik=34I%2bJlfw8AEWqg&riu=http%3a%2f%2fadvaytraders.in%2fimages%2fproducts%2fpeacock.webp&ehk=98Umm1Yqr6Y4RR1mzPZV1GjpEPZG9fCiWDezLG2RPZ0%3d&risl=&pid=ImgRaw&r=0",
    description: "A fountain-style addition to your celebration.",
    tag: "PREMIUM",
  },
  {
    id: 7,
    name: "Whistling Rockets",
    category: "Sky Crackers",
    price: 280,
    oldPrice: 350,
    image:
      "https://srivenkatcrackers.com/wp-content/uploads/2025/05/Whistling-Rocket.jpg",
    description: "A classic rocket-style festive product.",
    tag: "NEW",
  },
  {
    id: 8,
    name: "Deluxe Sparklers",
    category: "Sparklers",
    price: 180,
    oldPrice: 240,
    image:
      "https://4.imimg.com/data4/QF/QH/MY-3188893/silver-twinklings-deluxe-crackers-1000x1000.png",
    description: "Bright sparklers for festive occasions.",
    tag: "HOT DEAL",
  },
  
];
const categories = [
  {
    name: "All Products",
    image:
      "https://udaipurtimes.com/static/c1e/client/74416/uploaded/0f436659c96026fcd4d13c6fa592eb26.png",
  },
  {
    name: "Sparklers",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.S5d3tL7QnmtjL90VDjOh_QHaHa?r=0&w=646&h=646&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Ground Crackers",
    image:
      "https://www.kindpng.com/picc/m/274-2743921_box-hd-png-download.png",
  },
  {
    name: "Sky Crackers",
    image:
      "https://cdn11.bigcommerce.com/s-n1ap85vklg/images/stencil/500x659/products/629/426/Amazing_Ballet_Mini__86464.1680921455.jpg?c=1",
  },
  {
    name: "Fountains",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/5/418816333/ZX/ZN/BU/16727380/screenshot-from-2024-05-14-15-41-07-500x500.jpg",
  },
  {
    name: "Combos",
    image:
      "https://rocketfireworks.ca/cdn/shop/collections/Half_price_fireworks_deals.jpg?v=1663353860",
  },
];

const slides = [
  {
    eyebrow: "WELCOME TO SPARKZ",
    title: "Light Up Your",
    highlight: "Happiness.",
    description:
      "Explore festive collections, brilliant colours and special celebration offers at SPARKZ.",
    image:
      "https://wallpapercave.com/wp/wp2025841.jpg",
    button: "Explore Collection",
  },
  {
    eyebrow: "CELEBRATE EVERY MOMENT",
    title: "Make Every",
    highlight: "Moment Shine.",
    description:
      "Discover our featured collections and find inspiration for your next celebration.",
    image:
      "https://img.freepik.com/premium-photo/illustration-kids-playing-diwali-crackers-flat-doodle_756405-29293.jpg?w=2000",
    button: "Shop Bestsellers",
  },
  {
    eyebrow: "THE FESTIVE COLLECTION",
    title: "Celebrate In",
    highlight: "Brilliant Style.",
    description:
      "Browse celebration collections and combo packs for your special occasions.",
    image:
      "https://www.pngitem.com/pimgs/m/145-1452507_diwali-crackers-free-png-image-clipart-png-download.png",
    button: "View Collections",
  },
];

const faqs = [
  {
    question: "How can I browse products?",
    answer:
      "Choose a category or use the search bar to find products in the SPARKZ collection.",
  },
  {
    question: "Can I add multiple products to my cart?",
    answer:
      "Yes. Add products to your cart and use the plus and minus controls to change quantities.",
  },
  {
    question: "How can I contact SPARKZ?",
    answer:
      "Complete the contact form to prepare an email enquiry. Replace the demo recipient address with your actual shop email.",
  },
  {
    question: "Are these prices final?",
    answer:
      "These are sample frontend prices. Confirm actual prices, availability, delivery and applicable local requirements with the seller.",
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
  const [clickFireworks, setClickFireworks] = useState([]);

  const fireworkId = useRef(0);

  // Loading screen progress
  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((previous) =>
        Math.min(previous + Math.floor(Math.random() * 12) + 5, 100)
      );
    }, 150);

    const loaderTimer = setTimeout(() => {
      setProgress(100);
      setLoading(false);
    }, 4500);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  // AOS animation initialization
  useEffect(() => {
    if (loading) return;

    AOS.init({
      duration: 850,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refreshHard();
  }, [loading]);

  // Hero carousel autoplay
  useEffect(() => {
    if (loading) return;

    const timer = setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [loading]);

  // Notification timer
  useEffect(() => {
    if (!notice) return;

    const timer = setTimeout(() => setNotice(""), 2800);

    return () => clearTimeout(timer);
  }, [notice]);

  // Landing page click fireworks
  const handleFireworkTouch = (event) => {
    if (event.target.closest(".click-fireworks-layer")) return;

    const id = ++fireworkId.current;

    const colors = [
      "#ff3158",
      "#ffd700",
      "#00e5ff",
      "#ff72d2",
      "#a7ff4f",
      "#ff8c42",
      "#ffffff",
    ];

    const firework = {
      id,
      x: event.clientX,
      y: event.clientY,
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    setClickFireworks((previous) => [...previous, firework]);

    window.setTimeout(() => {
      setClickFireworks((previous) =>
        previous.filter((item) => item.id !== id)
      );
    }, 1200);
  };

  // Search and category filtering
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
  }, [activeCategory, search]);

  // Cart calculations
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Add product to cart
  const addToCart = (product) => {
    setCart((previous) => {
      const existing = previous.find((item) => item.id === product.id);

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });

    setNotice(`${product.name} added to your cart`);
  };

  // Update quantity
  const updateQuantity = (id, amount) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart((previous) => previous.filter((item) => item.id !== id));
    setNotice("Product removed from cart");
  };

  // Scroll to products
  const showProducts = (category = "All Products") => {
    setActiveCategory(category);

    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Contact form email
  const handleContactSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get("name");
    const contactEmail = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const body = `Name: ${name}\nEmail: ${contactEmail}\n\nMessage:\n${message}`;

    window.location.href =
      `mailto:hello@crackersshop.example` +
      `?subject=${encodeURIComponent(subject || "SPARKZ enquiry")}` +
      `&body=${encodeURIComponent(body)}`;

    setNotice("Your email app will open if it is configured.");
  };

  // Newsletter form
  const handleNewsletter = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setEmail("");
    setNotice("Thank you for subscribing!");
  };

  // Cart email enquiry
  const sendCartEnquiry = () => {
    if (cart.length === 0) return;

    const orderLines = cart
      .map(
        (item) =>
          `${item.name} x ${item.quantity} — ${money(
            item.price * item.quantity
          )}`
      )
      .join("\n");

    const body =
      `SPARKZ Cart Enquiry\n\n${orderLines}` +
      `\n\nEstimated total: ${money(cartTotal)}` +
      "\n\nPlease confirm availability, pricing, delivery and applicable requirements.";

    window.location.href =
      `mailto:hello@crackersshop.example` +
      `?subject=${encodeURIComponent("SPARKZ - Cart Enquiry")}` +
      `&body=${encodeURIComponent(body)}`;

    setNotice("Your email app will open if it is configured.");
  };

  const currentSlide = slides[activeSlide];

  // Full-screen loading page
  if (loading) {
    return (
      <div className="sparkz-loader">
        <div className="loader-night-sky" />

        <div className="loader-stars">
          {Array.from({ length: 65 }, (_, i) => (
            <span
              key={i}
              className="loader-star"
              style={{
                "--star-x": `${(i * 47 + 11) % 100}%`,
                "--star-y": `${(i * 31 + 7) % 100}%`,
                "--star-delay": `${(i % 8) * 0.4}s`,
              }}
            />
          ))}
        </div>

        <div className="loader-fireworks-scene">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              className={`loader-burst loader-burst-${i + 1}`}
              key={i}
              style={{ "--burst-delay": `${i * 0.48}s` }}
            >
              {Array.from({ length: 32 }, (_, j) => (
                <span
                  key={j}
                  className="loader-burst-particle"
                  style={{
                    "--particle-angle": `${j * 11.25}deg`,
                    "--particle-distance": `${35 + (j % 4) * 13}px`,
                    "--particle-delay": `${(j % 5) * 0.025}s`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="loader-rockets" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              className={`loader-rocket loader-rocket-${i + 1}`}
              key={i}
              style={{ "--rocket-delay": `${i * 0.75}s` }}
            >
              <span className="rocket-head" />
              <span className="rocket-trail" />
            </span>
          ))}
        </div>

        <div className="loader-floating-sparks">
          {Array.from({ length: 45 }, (_, i) => (
            <span
              key={i}
              style={{
                "--spark-x": `${(i * 29 + 5) % 100}%`,
                "--spark-delay": `${(i % 12) * 0.35}s`,
                "--spark-duration": `${3 + (i % 5)}s`,
              }}
            />
          ))}
        </div>

        <div className="sparkz-loader-content">
          <div className="loader-emblem">
            <span className="emblem-ring emblem-ring-one" />
            <span className="emblem-ring emblem-ring-two" />
            
          </div>

          <span className="loader-overline">THE FESTIVAL EXPERIENCE</span>

          <h1 className="sparkz-loader-title">
            SPAR<span>KZ</span>
          </h1>

          <div className="loader-gold-line">
            <span />
            ✦
            <span />
          </div>

          <p className="sparkz-loader-tagline">
            LIGHT UP YOUR HAPPINESS
          </p>

          <div className="loader-status">
            <span className="loader-status-dot" />
            PREPARING YOUR CELEBRATION
          </div>

          <div className="sparkz-progress-track">
            <span
              className="sparkz-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="sparkz-progress-details">
            <span>LET THE MAGIC BEGIN</span>
            <strong>{progress}%</strong>
          </div>
        </div>

        <div className="loader-bottom-decoration">
          <span>COLOUR</span>
          <i />
          <span>LIGHT</span>
          <i />
          <span>HAPPINESS</span>
        </div>

        <div className="loader-corner loader-corner-left">✦</div>
        <div className="loader-corner loader-corner-right">✧</div>
      </div>
    );
  }

  return (
    <div className="crackers-app" onPointerDown={handleFireworkTouch}>
      {/* CLICK AND TOUCH FIREWORKS */}
      <div className="click-fireworks-layer" aria-hidden="true">
        {clickFireworks.map((firework) => (
          <span
            className="click-firework"
            key={firework.id}
            style={{
              "--firework-x": `${firework.x}px`,
              "--firework-y": `${firework.y}px`,
              "--firework-color": firework.color,
            }}
          >
            {Array.from({ length: 28 }, (_, index) => (
              <span
                className="click-firework-particle"
                key={index}
                style={{ "--particle-index": index }}
              />
            ))}
          </span>
        ))}
      </div>

      {/* CONTINUOUS LANDING PAGE FIREWORKS */}
      <div className="fireworks-background" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <span
            key={index}
            className={`firework firework-${index + 1}`}
          />
        ))}

        {Array.from({ length: 28 }, (_, index) => (
          <span
            key={`spark-${index}`}
            className="floating-spark"
            style={{
              "--spark-index": index,
              "--spark-x": `${(index * 37) % 100}%`,
              "--spark-delay": `${(index % 9) * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* TOAST NOTIFICATION */}
      {notice && (
        <div className="toast-notice" role="status">
          <span>✓</span> {notice}
        </div>
      )}

      {/* ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        <span>✦ WELCOME TO SPARKZ ✦</span>
        <span>
          Celebrate responsibly. Follow all local safety rules.
        </span>
        <a href="#products">Explore Products ↗</a>
      </div>

      {/* NAVBAR */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand-logo" aria-label="SPARKZ home">
            
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

          <nav
            className={`main-navigation ${menuOpen ? "nav-open" : ""}`}
          >
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
                  if (event.key === "Enter") {
                    showProducts("All Products");
                  }
                }}
                placeholder="Search products..."
                aria-label="Search products"
              />
            </label>

            <a
              href="#cart"
              className="cart-icon-button"
              aria-label={`Shopping cart, ${cartCount} items`}
            >
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{cartCount}</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO CAROUSEL */}
        <section className="hero-section" id="home">
          <div className="hero-carousel">
            {slides.map((slide, index) => (
              <div
                key={slide.eyebrow}
                className={`hero-slide ${
                  index === activeSlide ? "active" : ""
                }`}
                style={{
                  "--hero-image": `url("${slide.image}")`,
                }}
                aria-hidden={index !== activeSlide}
              >
                <div className="hero-overlay" />

                <div className="container hero-content">
                  <div
                    className="hero-copy"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <span className="eyebrow">
                      <span className="eyebrow-line" />
                      {slide.eyebrow}
                    </span>

                    <h1>
                      {slide.title}
                      <br />
                      <span>{slide.highlight}</span>
                    </h1>

                    <p>{slide.description}</p>

                    <div className="hero-buttons">
                      <button
                        className="button button-primary"
                        onClick={() =>
                          showProducts(
                            index === 1 ? "Sparklers" : "All Products"
                          )
                        }
                      >
                        {slide.button} <span>↗</span>
                      </button>

                      <a className="button button-outline" href="#about">
                        Discover Our Story
                      </a>
                    </div>

                    <div className="hero-stats">
                      <div>
                        <strong>08+</strong>
                        <span>Featured Products</span>
                      </div>
                      <i />
                      <div>
                        <strong>06</strong>
                        <span>Product Categories</span>
                      </div>
                      <i />
                      <div>
                        <strong>100%</strong>
                        <span>Festive Spirit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

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
                    aria-current={activeSlide === index}
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

            <div className="hero-side-label">MAKE MOMENTS MEMORABLE</div>

            <div className="hero-bottom-label">
              EST. FOR EVERY CELEBRATION <span>✦</span> MADE TO SHINE
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features-strip">
          <div className="container features-grid">
            {[
              {
                icon: "✦",
                title: "Festive Collections",
                text: "Collections for special moments",
              },
              {
                icon: "◇",
                title: "Easy Shopping",
                text: "Simple product discovery",
              },
              {
                icon: "✧",
                title: "Special Offers",
                text: "Explore featured deals",
              },
              {
                icon: "♡",
                title: "Celebrate Safely",
                text: "Follow local safety guidance",
              },
            ].map((feature, index) => (
              <div
                className="feature-item"
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="feature-icon">{feature.icon}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="section categories-section" id="categories">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <span className="eyebrow">EXPLORE OUR WORLD</span>
              <h2>
                Shop By <span>Category</span>
              </h2>
              <p>
                Explore our collections and find products for your festive
                occasion.
              </p>
            </div>

            <div className="category-grid">
              {categories.map((category, index) => (
                <button
                  className="category-card"
                  key={category.name}
                  onClick={() => showProducts(category.name)}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                  />

                  <span className="category-shade" />

                  <span className="category-card-content">
                    <small>EXPLORE COLLECTION</small>
                    <strong>{category.name}</strong>
                    <span className="category-arrow">↗</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="section products-section" id="products">
          <div className="container">
            <div className="products-heading-row">
              <div
                className="section-heading section-heading-left"
                data-aos="fade-up"
              >
                <span className="eyebrow">THE SPARKZ COLLECTION</span>
                <h2>
                  Find Your <span>Favourites.</span>
                </h2>
                <p>
                  Browse products and add your favourites to the cart.
                </p>
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

            <div className="category-filters" data-aos="fade-up">
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
                  data-aos-delay={(index % 4) * 80}
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
                        Add to Cart <span>+</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="empty-search">
                <span>⌕</span>
                <h3>No products found</h3>
                <p>
                  Try another search term or choose a different category.
                </p>

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

            <div className="products-note">
              <span>✦</span>
              <p>
                Images and prices are sample demo content. Confirm product
                details and local sale requirements before launch.
              </p>
            </div>
          </div>
        </section>

        {/* OFFERS */}
        <section className="promo-section" id="offers">
          <div className="container">
            <div className="promo-banner" data-aos="zoom-in">
              <div className="promo-decoration promo-decoration-one">✦</div>
              <div className="promo-decoration promo-decoration-two">✧</div>

              <div className="promo-content">
                <span className="eyebrow">THE SPARKZ SPECIAL</span>

                <h2>
                  Make Your Celebration
                  <br />
                  <span>Extra Special.</span>
                </h2>

                <p>
                  Explore selected products and celebration combos in our
                  featured collection.
                </p>

                <button
                  className="button button-light"
                  onClick={() => showProducts("Combos")}
                >
                  Explore Combo Packs <span>↗</span>
                </button>
              </div>

              <div className="promo-image">
                <img
                  src="https://img.freepik.com/premium-photo/vibrant-illustration-colorful-diwali-crackers-bursting-night-sky-with-glowing-lights_302321-10829.jpg"
                  alt="Festive celebration lights"
                  loading="lazy"
                />

                <div className="promo-roundel">
                  <span>CELEBRATE</span>
                  <strong>WITH</strong>
                  <span>HAPPINESS</span>
                  <i>✦</i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual" data-aos="fade-right">
              <div className="about-image-main">
                <img
                  src="https://img.freepik.com/premium-photo/array-diwali-firecrackers-fireworks-isolated-white-background_860932-11480.jpg"
                  alt="Colourful celebration lights"
                  loading="lazy"
                />
              </div>

              <div className="about-image-small">
                <img
                  src="https://img.freepik.com/premium-photo/happy-diwali-crackers-background-social-media-post_846732-1041.jpg"
                  alt="Festive lights at night"
                  loading="lazy"
                />
              </div>

              <div className="about-badge">
                <span>MADE FOR</span>
                <strong>HAPPY</strong>
                <span>MOMENTS ✦</span>
              </div>
            </div>

            <div className="about-content" data-aos="fade-left">
              <span className="eyebrow">A LITTLE ABOUT US</span>

              <h2>
                Every Celebration
                <br />
                Has A <span>Story.</span>
              </h2>

              <p>
                At SPARKZ, we believe celebrations are about bringing people
                together, sharing happiness and creating memories.
              </p>

              <p>
                Our online storefront makes it simple to explore collections,
                compare listed prices and organise your selected products.
              </p>

              <div className="about-points">
                <div>
                  <span>01</span>
                  <p>
                    <strong>Explore With Ease</strong>
                    Browse products and collections in one place.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <p>
                    <strong>Plan Your Celebration</strong>
                    Keep selected products together in your cart.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <p>
                    <strong>Celebrate Responsibly</strong>
                    Follow product instructions and local regulations.
                  </p>
                </div>
              </div>

              <a href="#products" className="text-link">
                Explore Our Collection <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* WHY SPARKZ */}
        <section className="section why-section">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <span className="eyebrow">THE SPARKZ EXPERIENCE</span>
              <h2>
                Made For Your <span>Moments.</span>
              </h2>
              <p>
                Thoughtful website features make browsing and celebration
                planning simple.
              </p>
            </div>

            <div className="why-grid">
              {[
                {
                  number: "01",
                  icon: "◇",
                  title: "Easy Discovery",
                  description: "Find products using categories and search.",
                },
                {
                  number: "02",
                  icon: "✦",
                  title: "Featured Collections",
                  description: "Explore product highlights and combo packs.",
                },
                {
                  number: "03",
                  icon: "▤",
                  title: "Simple Cart",
                  description:
                    "Update quantities and review your estimated total.",
                },
                {
                  number: "04",
                  icon: "♡",
                  title: "Safety First",
                  description:
                    "Follow product instructions and local regulations.",
                },
              ].map((item, index) => (
                <div
                  className="why-card"
                  key={item.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="why-card-top">
                    <span className="why-icon">{item.icon}</span>
                    <span className="why-number">{item.number}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="why-line" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section testimonials-section" id="reviews">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <span className="eyebrow">KIND WORDS</span>
              <h2>
                Moments Worth <span>Sharing.</span>
              </h2>
              <p>
                Sample review cards. Replace these with genuine customer
                feedback before publishing.
              </p>
            </div>

            <div className="testimonial-grid">
              {[
                {
                  quote:
                    "The website is easy to browse and helps me find the collection I need.",
                  name: "Uday",
                  location: "Krishnagiri",
                },
                {
                  quote:
                    "The clear product cards and cart layout make everything feel organised.",
                  name: "Viki",
                  location: "Erode",
                },
                {
                  quote:
                    "The categories and search make exploring products convenient.",
                  name: "Nisha",
                  location: "Chennai",
                },
              ].map((review, index) => (
                <article
                  className="testimonial-card"
                  key={review.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className="review-stars"
                    aria-label="Sample five star rating"
                  >
                    ★★★★★
                  </div>

                  <span className="quote-mark">“</span>
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

        {/* FAQ */}
        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro" data-aos="fade-right">
              <span className="eyebrow">GOT QUESTIONS?</span>

              <h2>
                Frequently Asked <span>Questions.</span>
              </h2>

              <p>
                Find answers about browsing products, using your cart and
                contacting SPARKZ.
              </p>

              <a href="#contact" className="text-link">
                Still need help? Contact us <span>↗</span>
              </a>
            </div>

            <div className="faq-list" data-aos="fade-left">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${
                    openFaq === index ? "faq-open" : ""
                  }`}
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

        {/* NEWSLETTER */}
        <section className="newsletter-section">
          <div className="container newsletter-inner" data-aos="fade-up">
            <div>
              <span className="eyebrow">STAY IN THE LOOP</span>
              <h2>
                A Little More <span>Festive.</span>
              </h2>
              <p>
                Get updates about featured collections and announcements.
              </p>
            </div>

            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <button type="submit">
                Subscribe <span>↗</span>
              </button>

              <small>
                Demo form: subscriber details are not stored on a server.
              </small>
            </form>
          </div>
        </section>

        {/* SHOPPING CART */}
        <section className="section cart-section" id="cart">
          <div className="container">
            <div className="section-heading" data-aos="fade-up">
              <span className="eyebrow">YOUR SELECTED COLLECTION</span>
              <h2>
                Shopping <span>Cart.</span>
              </h2>
              <p>
                Review products, update quantities and check your total.
              </p>
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
                    <h3>Your cart is waiting</h3>
                    <p>
                      You haven't added any products yet. Explore the
                      collection to find your favourites.
                    </p>

                    <button
                      className="button button-primary"
                      onClick={() => showProducts("All Products")}
                    >
                      Explore Products <span>↗</span>
                    </button>
                  </div>
                ) : (
                  <div className="cart-items-list">
                    {cart.map((item) => (
                      <article className="cart-item" key={item.id}>
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                        />

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
                <span className="eyebrow">ORDER OVERVIEW</span>
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
                  Final prices, availability, delivery and legal requirements
                  must be confirmed with the seller.
                </p>

                <button
                  className="button button-primary checkout-button"
                  disabled={cart.length === 0}
                  onClick={sendCartEnquiry}
                >
                  Send Cart Enquiry <span>↗</span>
                </button>

                <button
                  className="continue-shopping"
                  onClick={() => showProducts("All Products")}
                >
                  ← Continue Shopping
                </button>

                <div className="cart-secure-note">
                  <span>✧</span>
                  <p>
                    Demo cart only. No payment is collected on this website.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-info" data-aos="fade-right">
              <span className="eyebrow">LET'S CONNECT</span>

              <h2>
                We'd Love To
                <br />
                <span>Hear From You.</span>
              </h2>

              <p>
                Have a question about a product or collection? Send us an
                enquiry using the form.
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
                  <strong>24 Hours</strong>
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
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  IG
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  FB
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  YT
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleContactSubmit}
              data-aos="fade-left"
            >
              <div className="contact-form-heading">
                <span className="eyebrow">SEND AN ENQUIRY</span>
                <h3>Drop Us A Message.</h3>
                <p>
                  Complete the details to continue through your email app.
                </p>
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
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help?"
                />
              </label>

              <label>
                Your Message
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your enquiry here..."
                />
              </label>

              <button
                className="button button-primary contact-submit"
                type="submit"
              >
                Prepare Email <span>↗</span>
              </button>

              <small className="form-note">
                Demo form. Update the recipient email address in App.jsx
                before publishing.
              </small>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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
              Discover festive collections and plan your special moments
              with SPARKZ. Celebrate responsibly and follow all applicable
              local safety regulations.
            </p>

            <a href="#products" className="footer-explore">
              Explore The Collection <span>↗</span>
            </a>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#offers">Special Offers</a>
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
            <p>Update with your actual business address.</p>
            <a href="#contact" className="footer-contact-link">
              Contact Our Team ↗
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} SPARKZ. All rights reserved.
          </p>

          <p className="footer-made">
            MADE FOR CELEBRATION <span>✦</span>
          </p>

          <a href="#home" className="back-to-top">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React from "react";
import "./App.css";
import BetaBanner from "./components/BetaBanner";

function App() {
    return (
        <div className="App">
            <BetaBanner />

            {/* Header */}
            <header className="university-header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo-placeholder">
                            <div className="logo-text">SJNY</div>
                        </div>
                        <div className="university-info">
                            <h1 className="university-name">
                                Saint Joseph's University, New York
                            </h1>
                            <p className="university-tagline">
                                Empowering Minds, Transforming Lives
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="main-navigation">
                <div className="container">
                    <ul className="nav-menu">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#academics">Academics</a>
                        </li>
                        <li>
                            <a href="#campus-life">Campus Life</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h2>
                                Welcome to Saint Joseph's University, New York
                            </h2>
                            <p>
                                Experience excellence in education across our
                                Brooklyn and Long Island campuses. Join a
                                community dedicated to academic achievement,
                                personal growth, and service to others.
                            </p>
                            <div className="hero-buttons">
                                <button className="btn btn-primary">
                                    Apply Now
                                </button>
                                <button className="btn btn-secondary">
                                    Schedule a Visit
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="stats-section">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-number">2</div>
                                <div className="stat-label">
                                    Beautiful Campuses
                                </div>
                                <div className="stat-source">
                                    Brooklyn & Long Island
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">
                                    Academic Programs
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">100+</div>
                                <div className="stat-label">
                                    Years of Excellence
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">15K+</div>
                                <div className="stat-label">
                                    Successful Alumni
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Find Your Program */}
                <section className="programs-section" id="academics">
                    <div className="container">
                        <h2>Find Your Program</h2>
                        <p>
                            Discover our comprehensive range of undergraduate
                            and graduate programs designed to prepare you for
                            success in today's competitive world.
                        </p>
                        <div className="programs-grid">
                            <div className="program-card">
                                <h3>Undergraduate Programs</h3>
                                <p>
                                    Bachelor's degrees in business, liberal
                                    arts, sciences, and more
                                </p>
                                <button className="btn btn-outline">
                                    Explore Programs
                                </button>
                            </div>
                            <div className="program-card">
                                <h3>Graduate Programs</h3>
                                <p>
                                    Master's degrees and advanced certificates
                                    for career advancement
                                </p>
                                <button className="btn btn-outline">
                                    Explore Programs
                                </button>
                            </div>
                            <div className="program-card">
                                <h3>Professional Development</h3>
                                <p>
                                    Continuing education and professional
                                    certification programs
                                </p>
                                <button className="btn btn-outline">
                                    Explore Programs
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Campus Life */}
                <section className="campus-life-section" id="campus-life">
                    <div className="container">
                        <h2>Campus Life</h2>
                        <p>
                            Experience vibrant campus life with student
                            organizations, athletics, cultural events, and
                            community service opportunities that enrich your
                            educational journey.
                        </p>
                        <div className="campus-features">
                            <div className="campus-feature">
                                <div className="feature-icon">🏙️</div>
                                <h3>Brooklyn Campus</h3>
                                <p>
                                    Urban campus in the heart of Brooklyn with
                                    modern facilities
                                </p>
                            </div>
                            <div className="campus-feature">
                                <div className="feature-icon">🌳</div>
                                <h3>Long Island Campus</h3>
                                <p>
                                    Beautiful suburban campus with green spaces
                                    and state-of-the-art labs
                                </p>
                            </div>
                            <div className="campus-feature">
                                <div className="feature-icon">🎭</div>
                                <h3>Student Activities</h3>
                                <p>
                                    Over 50 student organizations and clubs for
                                    every interest
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="university-footer" id="contact">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>Contact Information</h3>
                            <p>
                                <strong>Brooklyn Campus:</strong>
                                <br />
                                245 Clinton Avenue
                                <br />
                                Brooklyn, NY 11205
                            </p>
                            <p>
                                <strong>Long Island Campus:</strong>
                                <br />
                                155 West Roe Boulevard
                                <br />
                                Patchogue, NY 11772
                            </p>
                            <p>
                                Phone: (631) 687-5100
                                <br />
                                Email: admissions@sjny.edu
                            </p>
                        </div>
                        <div className="footer-section">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <a href="#academics">Academics</a>
                                </li>
                                <li>
                                    <a href="#campus-life">Campus Life</a>
                                </li>
                                <li>
                                    <a href="https://sjny.edu">
                                        Official Website
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Follow Us</h3>
                            <div className="social-links">
                                <a
                                    href="https://facebook.com/saintjosephsuniversityny"
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="https://twitter.com/sjnyuniversity"
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitter
                                </a>
                                <a
                                    href="https://instagram.com/sjnyuniversity"
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="https://linkedin.com/school/saint-josephs-university-new-york"
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>
                            &copy; 2024 Saint Joseph's University, New York. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;

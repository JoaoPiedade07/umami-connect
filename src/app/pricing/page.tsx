"use client";
import styles from "./pricing.module.css";
import PricingList from "./pricingList";
import { useState, useCallback } from "react";

export default function Princing() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    return (
        <div className={styles.pricingContainer}>
        <div className={styles.header}>
            <h1 className={styles.title}>Pricing</h1>
            <p className={styles.subtitle}>Choose the plan that works for you</p>
        </div>
        
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Individual Plans</h2>

                <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h4>Hobby</h4>
                    <h2>Free</h2>
                    <hr className={styles.divider}/>
                    <p>Includes</p>
                    <PricingList />
                    <div className={styles.cardBtn}>
                        <button className={styles.Btn}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            Download
                            </button>
                    </div>
                </div>

                <div className={styles.card}>
                    <h4>Pro</h4>
                    <h2>$20</h2>
                    <hr className={styles.divider}/>
                    <p>Everything in free, plus</p>
                    <PricingList />
                    <div className={styles.cardBtn}>
                        <button className={styles.Btn}>Get Pro</button>
                        <a
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{ display: "flex", alignItems: "center" }}
                            >
                            Saiba mais
                            {isHovered && 
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ 
                                  marginLeft: "4px",
                                  transition: "all 0.3s ease",
                                  animation: "slideInRight 0.3s ease forwards"
                                }}>
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                              </svg>
                            }
                        </a>
                    </div>
                    
                </div>

                <div className={styles.card}>
                    <div>
                        <h4>Legendary</h4>
                        <h2>$200</h2>
                    </div>
                    <hr className={styles.divider}/>
                    <div>
                        <p>Everything in Pro, plus</p>
                        <PricingList />
                    </div>
                    <div className={styles.cardBtn}>
                        <button className={styles.Btn}>Get Legendary</button>
                    </div>
                    
                </div>
                </div>
        </section>
        </div>
    )
}

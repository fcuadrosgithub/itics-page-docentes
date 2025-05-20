"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import styles from "./nav-bar.module.css"

const navItems = [
  { name: "Aspirantes", href: "/aspirantes" },
  { name: "Alumnos", href: "/alumnos" },
  { name: "Egresados", href: "/egresados" },
  { name: "Público", href: "/publico" },
  { name: "Docentes", href: "/docentes", active: true },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbarContent}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              Docentes en TIC-ITSOEH
            </Link>
          </div>

          {/* Desktop menu */}
          <div className={styles.desktopMenu}>
            <div className={styles.menuItems}>
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className={item.active ? styles.activeLink : styles.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuButton}>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.menuToggle} aria-expanded={isOpen}>
              <span className={styles.srOnly}>Abrir menú principal</span>
              {isOpen ? (
                <X className={styles.icon} aria-hidden="true" />
              ) : (
                <Menu className={styles.icon} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuItems}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={item.active ? styles.activeMobileLink : styles.mobileLink}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
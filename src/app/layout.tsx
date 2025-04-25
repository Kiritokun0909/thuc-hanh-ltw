import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={styles.header}>
          <div className={styles.menu}>
            <ul>
              <li>
                <Link className={styles.navLink} href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} href={"/about"}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <Link className={styles.navLink} href={"/login"}>
                Login/Register
              </Link>
            </div>
          </div>
        </header>
        <div className={styles.page}>{children}</div>
        <footer className={styles.footer}>
          <div className={styles.socialLinks}>
            <Link href={"/policy"}>Privacy & terms</Link>
            {" | "}
            <Link href={"/#"}>Facebook</Link>
          </div>
          <div>Email: N20DCCN018@student.ptithcm.edu.vn</div>
        </footer>
      </body>
    </html>
  );
}

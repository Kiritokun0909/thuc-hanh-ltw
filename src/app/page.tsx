"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1>Homepage</h1>
      </div>
    </div>
  );
}

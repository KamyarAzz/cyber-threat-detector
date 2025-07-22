import React from "react";
import styles from "@/styles/loader.module.css";

export default function Loader() {
  return (
    <div className="mx-auto">
      <div className={styles.loader} />
    </div>
  );
}

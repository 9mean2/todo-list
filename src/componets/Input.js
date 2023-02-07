import React from "react";
import styles from "../style/common.module.css";

function Input({ onChange, value, name, type }) {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default Input;

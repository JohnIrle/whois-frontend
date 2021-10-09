import React, { FormEventHandler, useState } from "react";
import styles from "./Form.module.css";

interface FormProps {
    onSubmit: (IPorDomain: string) => void;
}

const Form = ({ onSubmit }: FormProps) => {
    const [IPorDomain, setIPorDomain] = useState("");

    return (
        <form
            className={styles.form}
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(IPorDomain);
            }}
        >
            <label htmlFor="searchInput">
                Search whois with an IP or Domain.
            </label>
            <input
                type="text"
                id="searchInput"
                className={styles.input}
                value={IPorDomain}
                onChange={(e) => setIPorDomain(e.target.value)}
            />
            <button type="submit" className={styles.submitButton}>
                Submit
            </button>
        </form>
    );
};

export default Form;

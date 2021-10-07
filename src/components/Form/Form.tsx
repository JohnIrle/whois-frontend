import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
    const [IPorDomain, setIPorDomain] = useState("");

    return (
        <form className={styles.form}>
            <label>
                Seach with an IP or Domain.
                <input
                    type="text"
                    className={styles.input}
                    value={IPorDomain}
                    onChange={(e) => setIPorDomain(e.target.value)}
                />
            </label>
            <button type="submit" className={styles.submitButton}>
                Submit
            </button>
        </form>
    );
};

export default Form;

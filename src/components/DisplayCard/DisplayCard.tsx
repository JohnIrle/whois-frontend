import React from "react";
import styles from "./DisplayCard.module.css";

interface DisplayCard {
    title: string;
    entry: any;
    dates?: boolean;
}

const DisplayCard = ({ title, entry, dates }: DisplayCard) => {
    function capitalize(str: string) {
        return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    }
    return (
        <div className={styles.displayItem}>
            <h3>{title}</h3>
            {Object.entries(entry).map((entry) => {
                const [key, value] = entry;
                if (key !== "rawText") {
                    return (
                        <div>
                            <strong>{capitalize(key)}</strong>:
                            <br />
                            <p className={styles.contentItem}>
                                {dates
                                    ? new Date(value as string).toLocaleString()
                                    : (value as string)}
                            </p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default DisplayCard;

import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import Form from "./components/Form/Form";

function App() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [data, setData] = useState({});

    const onSubmit = async (IPorDomain: string) => {
        try {
            setLoading(true);

            const response = await axios.post("/api/whois", {
                IPorDomain,
            });

            setData(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setErrorMessage(error.response!.data);
            }
        }
    };

    return (
        <>
            <Form onSubmit={onSubmit} />
        </>
    );
}

export default App;

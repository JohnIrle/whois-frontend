import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import Form from "./components/Form/Form";
import WhoisDisplay from "./components/WhoisDisplay/WhoisDisplay";
import { submitWhois } from "./actions/whoisActions";

function App() {
    const { loading, error } = useSelector((state: RootStore) => state.whois);
    const dispatch = useDispatch();
    const onSubmit = async (IPorDomain: string) => {
        dispatch(submitWhois(IPorDomain));
    };

    return (
        <>
            <Form onSubmit={onSubmit} />

            {error && <h2>Something went wrong</h2>}
            {loading && <h2>Loading...</h2>}
            {!loading && !error && <WhoisDisplay />}
        </>
    );
}

export default App;

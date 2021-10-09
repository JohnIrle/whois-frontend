import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import DisplayCard from "../DisplayCard/DisplayCard";

const WhoisDisplay = () => {
    const { data } = useSelector((state: RootStore) => state.whois);

    const { WhoisRecord } = data;
    const {
        administrativeContact,
        technicalContact,
        registrant,
        nameServers,
        audit,
    } = WhoisRecord;

    return (
        <div style={{ paddingBottom: "2rem" }}>
            <DisplayCard
                title="Administrative Contact"
                entry={administrativeContact}
            />
            <DisplayCard title="Technical Contact" entry={technicalContact} />
            <DisplayCard title="Registrant" entry={registrant} />
            <DisplayCard title="Name Servers" entry={nameServers} />
            <DisplayCard title="Audit" entry={audit} dates={true} />
        </div>
    );
};

export default WhoisDisplay;

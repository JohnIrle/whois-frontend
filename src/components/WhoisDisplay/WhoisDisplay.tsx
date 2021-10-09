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
            {WhoisRecord && (
                <>
                    {administrativeContact && (
                        <DisplayCard
                            title="Administrative Contact"
                            entry={administrativeContact}
                        />
                    )}
                    {technicalContact && (
                        <DisplayCard
                            title="Technical Contact"
                            entry={technicalContact}
                        />
                    )}
                    {registrant && (
                        <DisplayCard title="Registrant" entry={registrant} />
                    )}
                    {nameServers && (
                        <DisplayCard title="Name Servers" entry={nameServers} />
                    )}
                    {audit && (
                        <DisplayCard title="Audit" entry={audit} dates={true} />
                    )}
                </>
            )}
        </div>
    );
};

export default WhoisDisplay;

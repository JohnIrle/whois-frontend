type Registrant = {
    organization: string;
    state: string;
    country: string;
    countryCode: string;
    rawText: string;
};

type AdministrativeContact = {
    organization: string;
    state: string;
    country: string;
    countryCode: string;
    rawText: string;
};

type TechnicalContact = {
    organization: string;
    state: string;
    country: string;
    countryCode: string;
    rawText: string;
};

type NameServers = {
    rawText: string;
    hostNames: string[];
    ips: string[];
};

type Audit = {
    createdDate: string;
    updatedDate: string;
};

type RegistryData = {
    createdDate: string;
    updatedDate: string;
    expiresDate: string;
    domainName: string;
    nameServers: NameServers;
    status: string;
    rawText: string;
    parseCode: number;
    header: string;
    strippedText: string;
    footer: string;
    audit: Audit;
    customField1Name: string;
    customField1Value: string;
    registrarName: string;
    registrarIANAID: string;
    createdDateNormalized: string;
    updatedDateNormalized: string;
    expiresDateNormalized: string;
    customField2Name: string;
    customField3Name: string;
    customField2Value: string;
    customField3Value: string;
    whoisServer: string;
};

export type WhoisRecord = {
    createdDate: string;
    updatedDate: string;
    expiresDate: string;
    registrant: Registrant;
    administrativeContact: AdministrativeContact;
    technicalContact: TechnicalContact;
    domainName: string;
    nameServers: NameServers;
    status: string;
    rawText: string;
    parseCode: number;
    header: string;
    strippedText: string;
    footer: string;
    audit: Audit;
    customField1Name: string;
    customField1Value: string;
    registrarName: string;
    registrarIANAID: string;
    whoisServer: string;
    createdDateNormalized: string;
    updatedDateNormalized: string;
    expiresDateNormalized: string;
    customField2Name: string;
    customField3Name: string;
    customField2Value: string;
    customField3Value: string;
    registryData: RegistryData;
    domainAvailability: string;
    contactEmail: string;
    domainNameExt: string;
    estimatedDomainAge: number;
};

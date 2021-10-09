import { WhoisRecord } from "../types/whoisResponse";

export const WHOIS_REQUEST = "WHOIS_REQUEST";
export const WHOIS_SUCCESS = "WHOIS_SUCCESS";
export const WHOIS_FAIL = "WHOIS_FAIL";

export interface WhoisRequest {
    type: typeof WHOIS_REQUEST;
}

export interface WhoisSuccess {
    type: typeof WHOIS_SUCCESS;
    payload: any;
}

export interface WhoisFail {
    type: typeof WHOIS_FAIL;
    payload: { message: string; field: string }[];
}

export type WhoisTypes = WhoisRequest | WhoisSuccess | WhoisFail;

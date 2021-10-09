import axios from "axios";
import { Dispatch } from "redux";
import { ThunkActionType } from "../store";
import {
    WHOIS_REQUEST,
    WHOIS_SUCCESS,
    WHOIS_FAIL,
    WhoisTypes,
} from "./whoisActionTypes";

export const submitWhois =
    (IPorDomain: string): ThunkActionType =>
    async (dispatch: Dispatch<WhoisTypes>) => {
        try {
            dispatch({ type: WHOIS_REQUEST });

            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_IP}/api/whois`,
                {
                    IPorDomain,
                }
            );

            dispatch({ type: WHOIS_SUCCESS, payload: response.data });
        } catch (error: any) {
            dispatch({ type: WHOIS_FAIL, payload: error.response.data.errors });
        }
    };

import {
    WHOIS_FAIL,
    WHOIS_REQUEST,
    WHOIS_SUCCESS,
    WhoisTypes,
} from "../actions/whoisActionTypes";

interface InitialStateI {
    loading: boolean;
    error: boolean;
    errorMessages: { message: string; field: string }[];
    data?: any;
}

const initialState: InitialStateI = {
    loading: true,
    error: false,
    errorMessages: [],
};
export default function whois(
    state = initialState,
    action: WhoisTypes
): InitialStateI {
    switch (action.type) {
        case WHOIS_REQUEST:
            return {
                loading: true,
                error: false,
                errorMessages: [],
            };
        case WHOIS_SUCCESS:
            return {
                loading: false,
                error: false,
                errorMessages: [],
                data: action.payload,
            };
        case WHOIS_FAIL:
            return {
                loading: false,
                error: true,
                errorMessages: action.payload,
            };
        default:
            return state;
    }
}

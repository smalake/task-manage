import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// ユーザ名を保管しておく
export const loginCookieState = atom({
    key: "loginCookie",
    default: [
        {
            key: "",
            value: "",
        },
    ],
    effects_UNSTABLE: [persistAtom],
});

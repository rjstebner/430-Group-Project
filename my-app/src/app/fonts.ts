import { Roboto } from "next/font/google";
import { Playwrite_VN } from "next/font/google";

export const playwrite_vn = Playwrite_VN();
export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});
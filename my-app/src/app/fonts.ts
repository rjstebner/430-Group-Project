import { Playwrite_VN } from "next/font/google";
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});
export const playwrite_vn = Playwrite_VN();
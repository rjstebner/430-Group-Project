import { Playwrite_VN ,Roboto } from "next/font/google";

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});
export const playwriteVn = Playwrite_VN({
    weight: ['100', '200', '300', '400'],
    display: 'swap',
    variable: '--font-playwrite',
});
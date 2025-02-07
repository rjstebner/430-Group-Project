import { Roboto } from "next/font/google";
import { Playfair_Display } from "next/font/google";

export const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
  })
export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});
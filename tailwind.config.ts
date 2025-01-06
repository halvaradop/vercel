import type { Config } from "tailwindcss"
import utilities from "@halvaradop/tailwindcss-utilities"

export default {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/ui/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                gray: {
                    DEFAULT: "#C0C0C0",
                    100: "#262626",
                    200: "#1B1B1B",
                    300: "#161616",
                },
                mark: "var(--shiki-token-link)",
            },
        },
    },
    plugins: [utilities],
} satisfies Config

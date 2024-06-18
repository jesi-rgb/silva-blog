import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            fontFamily: {
                sans: ["MD System Trial", "system-ui"],
                mono: [""],
            },
        },
    },

    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        logs: false,
        themes: ["light", "dark", "cupcake"],
    },
} as Config;

import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2563eb",
                accent: "#10b981",
                background: "#ffffff",
                text: "#111827",
            },
            fontSize: {
                h1: ["3rem", { fontWeight: "700" }],
                h2: ["2.25rem", { fontWeight: "600" }],
                h3: ["1.875rem", { fontWeight: "600" }],
                h4: ["1.5rem", { fontWeight: "500" }],
                h5: ["1.25rem", { fontWeight: "500" }],
                body: ["1rem", { fontWeight: "400" }],
                caption: ["0.875rem", { fontWeight: "400" }],
            },
            spacing: {
                4: "4px",
                8: "8px",
                16: "16px",
                24: "24px",
                32: "32px",
            },
            borderRadius: {
                sm: "4px",
                md: "8px",
                lg: "16px",
            },
            boxShadow: {
                sm: "0 1px 2px rgba(0,0,0,0.05)",
                md: "0 4px 6px rgba(0,0,0,0.1)",
            },
        },
    },
    plugins: [],
};

export default config;

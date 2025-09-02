module.exports = {
  theme: {
    extend: {
      colors: {
        violetCustom: "oklch(71.4% 0.203 305.504)",
        blueCustom: "oklch(78.9% 0.154 211.53)",
      },
      backgroundImage: {
        "loader-gradient": `conic-gradient(
          from 180deg,
          oklch(71.4% 0.203 305.504),
          oklch(78.9% 0.154 211.53),
          white,
          oklch(71.4% 0.203 305.504)
        )`,
      },
      backgroundSize: {
        "200": "200% 100%",
      },
      animation: {
        shimmer: "shimmer 2.5s infinite linear",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

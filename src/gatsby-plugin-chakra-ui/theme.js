import { theme as defaultTheme } from "@chakra-ui/core"
const theme = {
    ...defaultTheme,
    colors:{
        ...defaultTheme.colors,
        darkJungleGreen: "#031F27"
    },
    fonts:{
        body: "Fira Sans, sans-serif",
        heading: "Playfair Display, serif",
        mono: "Menlo, monospace",
    },
};

export default theme
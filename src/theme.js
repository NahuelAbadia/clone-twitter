import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    colors: {
        primary: theme.colors.twitter,
    },
    styles: {
        global: {
            "html, body, #root": {
                height: "100%",
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: 9999,
            },
            sizes: {
                lg: {
                    py: 3,
                    fontSize: "md",
                }
            },
            variants: {
                solid: {
                    color: "white",
                    backgroundColor: "primary.500",
                    fontWeight: "bold",
                    _hover: {
                        backgroundColor: "primary.600",
                    }
                },
            },
        },
    },
})
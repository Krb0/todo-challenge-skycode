import { extendTheme, ChakraTheme, DeepPartial } from "@chakra-ui/react";

const customTheme: DeepPartial<ChakraTheme> = {};

export const theme = extendTheme(customTheme) as ChakraTheme;

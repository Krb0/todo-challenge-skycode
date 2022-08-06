import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { theme } from "../style/theme";

export default function App({
  Component,
  ...props
}: AppProps<Omit<AppProps, "Component">>) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...props} />
    </ChakraProvider>
  );
}

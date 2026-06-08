"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}

// "use client"
// import { Provider } from "@/components/ui/provider"
// import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
// import {
//   ColorModeProvider,
//   type ColorModeProviderProps,
// } from "./color-mode"

// export function Provider(props: ColorModeProviderProps) {
//   return (
//     <ChakraProvider value={defaultSystem}>
//       <ColorModeProvider {...props} />
//     </ChakraProvider>



//   )
// }

// import { Provider } from "@/components/ui/provider"

// function App({ Component, pageProps }) {
//   return (
//     <Provider>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }


// "use client";

// import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
// import { ColorModeProvider } from "./color-mode";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <ChakraProvider value={defaultSystem}>
//       <ColorModeProvider>{children}</ColorModeProvider>
//     </ChakraProvider>
//   );
// }
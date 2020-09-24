import React from "react"
import { ApiContextProvider } from "./src/contexts/ApiContext"
import { ThemeContextProvider } from "./src/contexts/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ApiContextProvider>
    <ThemeContextProvider>
      {element}
    </ThemeContextProvider>
  </ApiContextProvider>
)

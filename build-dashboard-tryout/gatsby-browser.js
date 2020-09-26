import React from "react"

import {ApiContextProvider} from './src/contexts/ApiContext'

export const wrapRootElement = ({ element }) => (
  <ApiContextProvider>
      {element}
  </ApiContextProvider>
)

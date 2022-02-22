import { Suspense, lazy } from "react"
import { BrowserRouter } from "react-router-dom"
import { Web3ReactProvider } from "@web3-react/core"
import { getLibrary } from "utils/Web3React"

import Loading from "components/Loading"

const AppRouter = lazy(() => import("routers/index"))

const App = () => (
  <Suspense fallback={<Loading />}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Web3ReactProvider>
  </Suspense>
)

export default App

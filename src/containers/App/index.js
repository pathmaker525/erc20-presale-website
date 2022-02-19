import { Suspense, lazy } from "react"
import { BrowserRouter } from "react-router-dom"

import Loading from "components/Loading"

const AppRouter = lazy(() => import("routers/index"))

const App = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Suspense>
)

export default App

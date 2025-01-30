
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/UserContext'



const App = () => {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  )
}

export default App
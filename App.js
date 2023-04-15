import Routes from "./Routes";
import { UserProvider } from "./userContext";

export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

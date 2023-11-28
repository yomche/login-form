import { LoginForm } from "./components/form";

function App() {
  return (
    <div className="container">
      <LoginForm />

      <div className="register">
        <div>Don't have an account?</div>
        <div>Register</div>
      </div>
    </div>
  );
}

export default App;

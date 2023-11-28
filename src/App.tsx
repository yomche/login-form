import { LoginForm } from "./components/form";

function App() {
  return (
    <div className="container">
      <LoginForm />
      <div className="register">
        <div>Don't have an account?</div>
        <a>Register</a>
      </div>
    </div>
  );
}

export default App;

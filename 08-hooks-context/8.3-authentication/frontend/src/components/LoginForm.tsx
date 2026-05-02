import type {  ChangeEvent } from 'react';

interface LoginFormProps {
  onLogin: (l: string, p: string) => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const handleSubmit = (e:  ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const login = (target.elements.namedItem('login') as HTMLInputElement).value;
    const password = (target.elements.namedItem('password') as HTMLInputElement).value;
    onLogin(login, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input name="login" placeholder="Username" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};
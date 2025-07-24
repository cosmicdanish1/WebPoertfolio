import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import Alert from '../compopnent/Alert';

const Login = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(form.email, form.password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="login">
      {error && <Alert text={error} type="danger" />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container p-12 max-w-md w-full">
          <h3 className="head-text text-white mt-4 mr-4">Login</h3>
          <p className="text-lg text-white-600 mt-3 mr-5 text-white">
            Please sign in to access your account
          </p>

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input text-white"
                placeholder="Enter your email"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Password</span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="field-input text-white"
                placeholder="Enter your password"
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login; 
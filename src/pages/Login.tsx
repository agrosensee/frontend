// pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { supabase } from '@/lib/supabase';
import '../styles/Auth.scss';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      if (data.user) {
        toast.success('Uğurla daxil oldunuz!');
        navigate('/dashboard');
      }
    } catch (error: any) {
      console.error('Login xətası:', error);
      toast.error(error.message || 'Daxil olma uğursuz oldu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="brand">
            <div className="brand-icon">
              <span className="leaf-icon">🌱</span>
            </div>
            <h1>
              Agri<span className="brand-smart">Smart</span>
            </h1>
          </div>
          <h2>Fermanıza xoş gəlmisiniz</h2>
          <p>
            AI əsaslı ağıllı kənd təsərrüfatı ilə suyu qoruyun və ağıllı böyüyün
          </p>
        </div>

        <div className="auth-right">
          <div className="auth-form-wrapper">
            <h3>Daxil olun</h3>
            <p className="auth-subtitle">
              Hesabınıza daxil olaraq idarə panelinizə keçin
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mail@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Şifrə</label>
                <div className="input-wrapper">
                  <FiLock className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div className="form-footer">
                <Link to="/forgot-password" className="forgot-link">
                  Şifrəni unutmusunuz?
                </Link>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Yüklənir...' : 'Daxil ol'}
              </button>

              <div className="auth-switch">
                <span>Hesabınız yoxdur?</span>
                <Link to="/register">Qeydiyyatdan keçin</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
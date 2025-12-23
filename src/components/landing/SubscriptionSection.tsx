// components/landing/SubscriptionSection.tsx
import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { toast } from 'react-toastify';
import '../../styles/SubscriptionSection.scss';

interface Plan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 49,
    period: '/ay',
    description: 'Kiçik fermalar üçün ideal başlanğıc paketi.',
    features: [
      '5-ə qədər sensor',
      'Əsas AI təhlillər',
      'Hava proqnozu inteqrasiyası',
      'Email dəstək',
      '7 günlük məlumat tarixi',
    ],
  },
  {
    name: 'Professional',
    price: 149,
    period: '/ay',
    description: 'Böyüyən fermaların güc və təhlil ehtiyacları üçün.',
    features: [
      '25-ə qədər sensor',
      'Qabaqcıl AI təhlillər',
      'Hava proqnozu inteqrasiyası',
      'Prioritet dəstək',
      '30 günlük məlumat tarixi',
      'Xüsusi bildirişlər',
      'API girişi',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 449,
    period: '/ay',
    description: 'Böyük miqyaslı kənd təsərrüfatı əməliyyatları üçün.',
    features: [
      'Limitsiz sensor',
      'Premium AI təhlillər',
      'Hava proqnozu inteqrasiyası',
      '24/7 telefon dəstəyi',
      'Limitsiz məlumat tarixi',
      'Xüsusi bildirişlər',
      'API girişi',
      'Şəxsi hesab meneceri',
      'Xüsusi inteqrasiyalar',
    ],
  },
];

const cities = [
  'Bakı', 'Gəncə', 'Sumqayıt', 'Mingəçevir', 'Şirvan', 'Naxçıvan', 'Lənkəran', 'Şəki', 'Yevlax', 'Şamaxı',
  'Qəbələ', 'Quba', 'Qusar', 'Qax', 'Zaqatala', 'Balakən', 'Şəmkir', 'Gədəbəy', 'Daşkəsən', 'Tovuz',
  'Ağstafa', 'Qazax', 'Göyçay', 'Ağdaş', 'Ucar', 'Beyləqan', 'İmişli', 'Saatlı', 'Sabirabad', 'Salyan',
  'Neftçala', 'Biləsuvar', 'Cəlilabad', 'Masallı', 'Yardımlı', 'Lerik', 'Astara', 'Ağcabədi', 'Bərdə',
  'Zərdab', 'İsmayıllı', 'Ağsu', 'Qobustan', 'Xaçmaz', 'Siyəzən', 'Şabran', 'Xızı', 'Abşeron', 'Xocalı',
  'Ağdam', 'Füzuli', 'Kəlbəcər', 'Laçın', 'Qubadlı', 'Zəngilan', 'Tərtər', 'Göygöl', 'Samux',
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
  description: string;
  selectedPlan: string;
  planPrice: number;
  tempPassword: string;
  registrationDate: string;
}

const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://backend-m4dt.onrender.com'
    : 'https://backend-m4dt.onrender.com';

const SubscriptionSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
    description: '',
    selectedPlan: '',
    planPrice: 0,
    tempPassword: '',
    registrationDate: '',
  });

  const handlePlanSelect = (plan: Plan) => {
    console.log('Seçilən plan:', plan);
    setSelectedPlan(plan);
    setShowForm(true);
    setShowSuccess(false);

    setFormData((prev) => ({
      ...prev,
      selectedPlan: plan.name,
      planPrice: plan.price,
    }));

    setTimeout(() => {
      document.querySelector('.registration-form-wrapper')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(`Input dəyişdi → ${name}: ${value}`);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  if (!selectedPlan) {
    toast.error('Plan seçilməyib!');
    setLoading(false);
    return;
  }

  try {
    const tempPassword = Math.random().toString(36).slice(-8) + 'A1!';
    const registrationDate = new Date().toISOString();

    const fullData = {
      ...formData,
      selectedPlan: selectedPlan.name,
      planPrice: selectedPlan.price,
      tempPassword,
      registrationDate,
    };

    console.log('Backend-ə göndərilən məlumatlar:', fullData);

    const response = await fetch(`${API_BASE_URL}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullData),
    });

    // Xəta halı (400, 409 və s.)
    if (!response.ok) {
      let errorMessage = 'Xəta baş verdi. Yenidən cəhd edin.';

      // Server cavabını JSON olaraq oxumağa çalış
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        try {
          const errorData = await response.json();
          console.log('Serverdən xəta cavabı:', errorData);

          if (response.status === 409) {
            if (errorData.field === 'email') {
              errorMessage = 'Bu email artıq qeydiyyatdan keçib. Başqa email istifadə edin.';
              alert(errorMessage)
            } else if (errorData.field === 'phone') {
              errorMessage = 'Bu telefon nömrəsi artıq qeydiyyatdan keçib. Başqa nömrə istifadə edin.';
                            alert(errorMessage)

            } else {
              errorMessage = errorData.error || 'Bu məlumat artıq sistemdə mövcuddur.';
                            alert(errorMessage)

            }
          } else if (response.status === 400) {
            errorMessage = errorData.error || 'Daxil edilən məlumatlar düzgün deyil.';
                          alert(errorMessage)

          } else {
            errorMessage = errorData.error || `Server xətası: ${response.status}`;
                          alert(errorMessage)

          }
        } catch (parseError) {
          console.error('JSON parse olunmadı:', parseError);
          errorMessage = 'Serverdən gözlənilməz cavab alındı.';
        }
      } else {
        // JSON deyilsə, sadə text oxu
        const text = await response.text();
        console.log('Server cavabı (text):', text);
        errorMessage = text || `Server xətası: ${response.status}`;
      }

      // MÜTLƏQ TOAST GÖSTƏR
      toast.error(errorMessage);
      setLoading(false);
      return; // Uğurlu hissəyə keçmə
    }

    // UĞURLU CAVAB
    const result = await response.json();
    console.log('Qeydiyyat uğurlu:', result);

    toast.success('Qeydiyyat uğurla tamamlandı! Məlumatlar qeydə alındı.');

    setShowSuccess(true);
    setShowForm(false);

    // Formu sıfırla
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      phone: '',
      description: '',
      selectedPlan: '',
      planPrice: 0,
      tempPassword: '',
      registrationDate: '',
    });
    setSelectedPlan(null);
  } catch (networkError: any) {
    console.error('Şəbəkə xətası:', networkError);
    toast.error('İnternet bağlantısı yoxdur. Zəhmət olmasa yenidən cəhd edin.');
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="subscription-section">
      <div className="container">
        <div className="section-header">
          <h2>Abunəlik Planları</h2>
          <p>Fermanıza uyğun planı seçin və böyüməyə başlayın</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">
                  <Star size={14} /> <span>Ən populyar</span>
                </div>
              )}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price">${plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>

              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={18} /> <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="select-btn" onClick={() => handlePlanSelect(plan)}>
                Planı seç
              </button>
            </div>
          ))}
        </div>

        {showForm && selectedPlan && (
          <div className="registration-form-wrapper">
            <div className="form-container">
              <h3>Qeydiyyat - {selectedPlan.name} Plan</h3>
              <p className="form-subtitle">Məlumatlarınızı daxil edin</p>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Ad *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Soyad *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">Şəhər *</label>
                    <select name="city" value={formData.city} onChange={handleInputChange} required>
                      <option value="">Şəhər seçin</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefon nömrəsi *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+994"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Açıqlama (ixtiyari)</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Ferma haqqında qısa məlumat və ya xüsusi tələblər"
                    rows={4}
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Göndərilir...' : 'Təsdiq et'}
                </button>
              </form>
            </div>
          </div>
        )}

        {showSuccess && (
          <div className="success-message">
            <div className="success-content">
              <div className="success-icon">✓</div>
              <h3>Uğurla qeydiyyatdan keçdiniz!</h3>
              <p>Məlumatlarınız qeydə alındı. Tezliklə sizinlə əlaqə saxlayacağıq.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubscriptionSection;
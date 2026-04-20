import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';

const INITIAL_FIELDS = { name: '', phone: '', email: '', message: '' };

export default function ContactForm({ initialCar }) {
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (initialCar) {
      setFields((prev) => ({
        ...prev,
        message: `I'm interested in booking the ${initialCar}`,
      }));
    }
  }, [initialCar]);

  // Auto-dismiss toast after 4s
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  const validate = () => {
    const newErrors = {};
    if (!fields.name.trim()) newErrors.name = 'Name is required';
    if (!fields.phone.trim()) newErrors.phone = 'Phone is required';
    if (!fields.email.trim()) newErrors.email = 'Email is required';
    if (!fields.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e9fc44b8-1775-416f-b8a8-b1ed41b975fa',
          name: fields.name,
          phone: fields.phone,
          email: fields.email,
          message: fields.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setToast({ type: 'success', text: "Message sent! We'll contact you soon." });
        setFields(INITIAL_FIELDS);
        setErrors({});
      } else {
        setToast({ type: 'error', text: 'Failed to send. Please try again.' });
      }
    } catch {
      setToast({ type: 'error', text: 'No internet connection.' });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition';

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-[#0A0A0A] mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-[#0A0A0A] mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className={inputClass}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[#0A0A0A] mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-[#0A0A0A] mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={fields.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your requirements..."
            className={inputClass}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <Button
          variant="primary"
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Spinner size="sm" color="#C9A84C" /> Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl text-white text-sm font-medium shadow-lg transition-all ${
            toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {toast.text}
        </div>
      )}
    </>
  );
}

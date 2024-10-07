'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import AlertModal from './AlertModal';

// Correct the Supabase URL and API key
const supabaseUrl = 'https://brkxilyktfzwsecinljb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJya3hpbHlrdGZ6d3NlY2lubGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5NDIzODEsImV4cCI6MjA0MjUxODM4MX0.e-io18eyNiibHJcvBT9X1yqkX3NXyJvG0T9rGzf1gfE';

const supabase = createClient(supabaseUrl, supabaseKey);

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onClose: () => void;
}

export default function NewsletterSignupForm({ onClose }: Props) {
  const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const { error } = await supabase
          .from('undrstnd_newsletter')
          .insert([
            {
              first_name: formData.firstName,
              last_name: formData.lastName,
              email: formData.email
            }
          ]);

        if (error) throw error;
        
        console.log('Subscription successful');
        setShowSuccessAlert(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        if (error instanceof Error) {
          console.error('Error details:', error.message);
        }
        alert(`An error occurred. Please try again later.`);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCloseSuccessAlert = () => {
    setShowSuccessAlert(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  px-4 py-2 bg-gray-900 text-white rounded
                  hover:bg-[#ff5c00]
                  transition-colors duration-300 ease-in-out
                  disabled:opacity-50 disabled:hover:bg-gray-900
                "
              >
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </button>
            </div>
          </form>
        </div>
      </div>
      {showSuccessAlert && (
        <AlertModal
          message="Thank you for subscribing!"
          onClose={handleCloseSuccessAlert}
        />
      )}
    </>
  );
}
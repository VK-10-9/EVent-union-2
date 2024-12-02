import React, { useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BasicInformation from '../components/form/BasicInformation';
import StudentInformation from '../components/form/StudentInformation';
import ProfessionalInformation from '../components/form/ProfessionalInformation';
import { submitFormToGoogleSheets } from '../services/formSubmission';

export default function SurveyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [userType, setUserType] = useState('student');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      
      // Validate required fields
      const requiredFields = ['name', 'email', 'phone', 'userType'];
      const studentFields = userType === 'student' ? ['college', 'year', 'branch'] : [];
      const professionalFields = userType === 'professional' ? ['company', 'designation', 'experience'] : [];
      
      const allRequiredFields = [...requiredFields, ...studentFields, ...professionalFields];
      
      for (const field of allRequiredFields) {
        if (!data[field] || data[field] === '') {
          throw new Error(`Please fill in all required fields`);
        }
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email.toString())) {
        throw new Error('Please enter a valid email address');
      }

      // Validate phone number (basic validation)
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(data.phone.toString())) {
        throw new Error('Please enter a valid 10-digit phone number');
      }

      // For student, validate year selection
      if (userType === 'student' && (!data.year || data.year === '')) {
        throw new Error('Please select your year of study');
      }

      const success = await submitFormToGoogleSheets(data);
      if (success) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to submit form. Please try again.');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-blue-950/20 p-8 rounded-2xl border border-blue-900/20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-6">Your response has been recorded. We'll get back to you soon.</p>
            <Link
              to="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-blue-950/20 rounded-2xl p-6 sm:p-8 border border-blue-900/20">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">Join Our Community</h1>
          
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <BasicInformation userType={userType} setUserType={setUserType} />
            
            {userType === 'student' ? (
              <StudentInformation />
            ) : (
              <ProfessionalInformation />
            )}

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Additional Information</h2>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-300 mb-2">
                  Areas of Interest *
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  required
                  rows={3}
                  className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What are your areas of interest? (e.g., Web Development, AI/ML, Cybersecurity)"
                />
              </div>

              <div>
                <label htmlFor="expectations" className="block text-sm font-medium text-gray-300 mb-2">
                  What do you expect from our community?
                </label>
                <textarea
                  id="expectations"
                  name="expectations"
                  rows={3}
                  className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us what you hope to gain from joining our community"
                />
              </div>

              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    className="w-4 h-4 rounded border-blue-900/50 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-300">
                    I would like to receive updates about events and opportunities
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
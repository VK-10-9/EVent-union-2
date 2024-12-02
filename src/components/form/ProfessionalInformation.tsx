import React from 'react';
import FormInput from './FormInput';

export default function ProfessionalInformation() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Professional Details</h2>
      
      <FormInput
        id="company"
        label="Company Name"
        type="text"
        required
        placeholder="Enter your company name"
      />

      <FormInput
        id="designation"
        label="Designation"
        type="text"
        required
        placeholder="Enter your designation"
      />

      <FormInput
        id="experience"
        label="Years of Experience"
        type="number"
        required
        placeholder="Enter years of experience"
      />
    </div>
  );
}
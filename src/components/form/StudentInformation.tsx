import React from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

export default function StudentInformation() {
  const yearOptions = [
    { value: '1', label: '1st Year' },
    { value: '2', label: '2nd Year' },
    { value: '3', label: '3rd Year' },
    { value: '4', label: '4th Year' },
    { value: '5', label: '5th Year' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Educational Details</h2>
      
      <FormInput
        id="college"
        label="College/University"
        type="text"
        required
        placeholder="Enter your college/university name"
      />

      <FormSelect
        id="year"
        label="Year of Study"
        required
        value=""
        onChange={() => {}}
        options={yearOptions}
      />

      <FormInput
        id="branch"
        label="Branch/Major"
        type="text"
        required
        placeholder="Enter your branch or major"
      />
    </div>
  );
}
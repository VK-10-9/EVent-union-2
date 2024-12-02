import React from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

interface BasicInformationProps {
  userType: string;
  setUserType: (type: string) => void;
}

export default function BasicInformation({ userType, setUserType }: BasicInformationProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Basic Information</h2>
      
      <FormInput
        id="name"
        label="Full Name"
        type="text"
        required
        placeholder="Enter your full name"
      />

      <FormInput
        id="email"
        label="Email Address"
        type="email"
        required
        placeholder="Enter your email address"
      />

      <FormInput
        id="phone"
        label="Phone Number"
        type="tel"
        required
        placeholder="Enter your phone number"
      />

      <FormSelect
        id="userType"
        label="I am a"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        required
        options={[
          { value: 'student', label: 'Student' },
          { value: 'professional', label: 'Working Professional' },
        ]}
      />
    </div>
  );
}
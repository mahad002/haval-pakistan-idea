import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, User, Mail, Phone, MapPin, Car } from 'lucide-react';

interface TestDriveFormProps {
  preselectedModel?: string | null;
}

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  model: z.string().min(1, 'Please select a model'),
  location: z.string().min(1, 'Please select a location'),
  date: z.string().min(1, 'Please select a date')
    .refine((date) => {
      const selected = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, 'Please select a future date'),
  time: z.string().min(1, 'Please select a time'),
  comments: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const TestDriveForm = ({ preselectedModel }: TestDriveFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (preselectedModel) {
      setValue('model', preselectedModel);
    }
  }, [preselectedModel, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      // Show loading state
      const response = await fetch('/api/test-drive', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit test drive request');
      }

      // Show success message
      alert('Test drive request submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit test drive request. Please try again.');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <User className="w-4 h-4" />
            Full Name
          </label>
          <input
            {...register('name')}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Mail className="w-4 h-4" />
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Phone className="w-4 h-4" />
            Phone
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="+1234567890"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Car className="w-4 h-4" />
            Model
          </label>
          <select
            {...register('model')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            defaultValue={preselectedModel || ""}
          >
            <option value="">Select a model</option>
            <optgroup label="HAVAL">
              <option value="h6">HAVAL H6</option>
              <option value="h6-hev">HAVAL H6 HEV</option>
              <option value="jolion">HAVAL JOLION</option>
              <option value="jolion-hev">HAVAL JOLION HEV</option>
            </optgroup>
            <optgroup label="ORA">
              <option value="o3">ORA O3</option>
              <option value="o7">ORA O7</option>
            </optgroup>
            <optgroup label="TANK">
              <option value="tank-500">TANK 500</option>
            </optgroup>
          </select>
          {errors.model && (
            <p className="mt-1 text-sm text-red-600">{errors.model.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <MapPin className="w-4 h-4" />
            Preferred Location
          </label>
          <select
            {...register('location')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Select a location</option>
            <option value="karachi">Karachi</option>
            <option value="lahore">Lahore</option>
            <option value="islamabad">Islamabad</option>
          </select>
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Calendar className="w-4 h-4" />
            Preferred Date & Time
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              {...register('date')}
              min={today}
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
            <select
              {...register('time')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select time</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>
          {(errors.date || errors.time) && (
            <p className="mt-1 text-sm text-red-600">
              {errors.date?.message || errors.time?.message}
            </p>
          )}
        </div>
      </div>

      {/* Additional Comments */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Comments (Optional)
        </label>
        <textarea
          {...register('comments')}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          placeholder="Any specific requirements or questions?"
        />
      </div>

      {/* Terms and Privacy */}
      <div className="text-sm text-gray-600">
        By submitting this form, you agree to our{' '}
        <a href="/terms" className="text-red-600 hover:text-red-700">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy" className="text-red-600 hover:text-red-700">
          Privacy Policy
        </a>
        .
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-8 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <Car className="w-5 h-5" />
            <span>Schedule Test Drive</span>
          </>
        )}
      </button>
    </form>
  );
};

export default TestDriveForm;
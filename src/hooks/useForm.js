import { useState } from 'react';
import { validateForm } from '@/utils/validation';

/**
 * Custom hook for form handling
 * @param {Object} initialValues - Initial form values
 * @param {Object} validationRules - Form validation rules
 * @param {Function} onSubmit - Function to run on valid form submission
 * @returns {Object} Form handling utilities
 */
const useForm = (initialValues, validationRules, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [serverResponse, setServerResponse] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setValues({
      ...values,
      [name]: value
    });
    
    // Clear error when user starts typing again
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
    
    // Clear server errors/response when form changes
    if (serverError || serverResponse) {
      setServerError(null);
      setServerResponse(null);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationResult = validateForm(values, validationRules);
    setErrors(validationResult.errors);
    
    // If form is valid, proceed with submission
    if (validationResult.isValid) {
      setIsSubmitting(true);
      
      try {
        const response = await onSubmit(values);
        setServerResponse(response);
        setIsSubmitted(true);
        
        // Reset form if submission was successful
        if (response.success) {
          setValues(initialValues);
        }
      } catch (error) {
        setServerError(
          error.message || 'Something went wrong. Please try again.'
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Reset the form
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitted(false);
    setServerError(null);
    setServerResponse(null);
  };

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    serverError,
    serverResponse,
    handleChange,
    handleSubmit,
    resetForm,
    setValues
  };
};

export default useForm;
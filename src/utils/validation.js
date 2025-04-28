/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Whether the email is valid
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Validate form fields
   * @param {Object} fields - Form fields to validate
   * @param {Object} rules - Validation rules
   * @returns {Object} Object with errors and isValid properties
   */
  export const validateForm = (fields, rules) => {
    const errors = {};
    let isValid = true;
  
    Object.keys(rules).forEach((fieldName) => {
      const value = fields[fieldName];
      const fieldRules = rules[fieldName];
  
      // Required field validation
      if (fieldRules.required && (!value || value.trim() === '')) {
        errors[fieldName] = fieldRules.requiredMessage || 'This field is required';
        isValid = false;
      } 
      // Min length validation
      else if (value && fieldRules.minLength && value.length < fieldRules.minLength) {
        errors[fieldName] = `Must be at least ${fieldRules.minLength} characters`;
        isValid = false;
      } 
      // Max length validation
      else if (value && fieldRules.maxLength && value.length > fieldRules.maxLength) {
        errors[fieldName] = `Cannot exceed ${fieldRules.maxLength} characters`;
        isValid = false;
      } 
      // Email format validation
      else if (value && fieldRules.isEmail && !isValidEmail(value)) {
        errors[fieldName] = fieldRules.emailMessage || 'Please enter a valid email address';
        isValid = false;
      }
      // Pattern validation
      else if (value && fieldRules.pattern && !fieldRules.pattern.test(value)) {
        errors[fieldName] = fieldRules.patternMessage || 'Invalid format';
        isValid = false;
      }
      // Custom validation
      else if (value && fieldRules.custom && !fieldRules.custom(value)) {
        errors[fieldName] = fieldRules.customMessage || 'Invalid value';
        isValid = false;
      }
    });
  
    return { isValid, errors };
  };
  
  /**
   * Common validation rules for reuse across forms
   */
  export const validationRules = {
    name: {
      required: true,
      requiredMessage: 'Please enter your name',
      minLength: 2,
      maxLength: 100
    },
    email: {
      required: true,
      requiredMessage: 'Please enter your email address',
      isEmail: true,
      emailMessage: 'Please enter a valid email address'
    },
    message: {
      required: true,
      requiredMessage: 'Please enter your message',
      minLength: 10,
      maxLength: 1000
    },
    subject: {
      required: true,
      requiredMessage: 'Please enter a subject',
      minLength: 5,
      maxLength: 200
    },
    phone: {
      pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
      patternMessage: 'Please enter a valid phone number'
    }
  };
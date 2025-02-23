import { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (!value) error = "Full name is required";
        else if (value.length < 2) error = "Name must be at least 2 characters";
        else if (!/^[A-Za-z\s]+$/.test(value)) error = "Only alphabets and spaces allowed";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format";
        break;
      case "password":
        if (!value) error = "Password is required";
        else if (value.length < 8) error = "Password must be at least 8 characters";
        else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(value)) {
          error = "Password must include uppercase, lowercase, number, and special character";
        }
        break;
      case "confirmPassword":
        if (value !== formData.password) error = "Passwords do not match";
        break;
      case "phone":
        if (value && !/^\+?[1-9]\d{1,14}$/.test(value)) error = "Invalid phone number";
        break;
      case "dob":
        if (value) {
          const date = new Date(value);
          const today = new Date();
          if (date > today) error = "Date of birth cannot be in the future";
        }
        break;
      default:
        break;
    }
    return error;
  };

  useEffect(() => {
    if (formData.confirmPassword) {
      const error = validateField("confirmPassword", formData.confirmPassword);
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: error,
      }));
    }
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    alert('jjjjjjj')
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      axios({
        method: "post",
        url: "http://localhost:3000/users",
        data: formData,
      })
        .then(() => {
          console.log(formData);
          alert("User added");
          setIsSuccess(true);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error signing up:", err);
          alert("Signup failed. Please try again.");
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.fullName &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      Object.keys(errors).length === 0
    );
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-green-600">Registration Successful!</h2>
            <p className="mt-2 text-gray-600">Thank you for signing up. Welcome aboard!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                id="fullName"
                name="fullName"
                type="text"
                required
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.fullName ? "border-red-300" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={formData.fullName}
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                id="email"
                name="email"
                type="email"
                required
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.email ? "border-red-300" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={formData.email}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className={`block w-full px-3 py-2 border ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  value={formData.password}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className={`block w-full px-3 py-2 border ${
                    errors.confirmPassword ? "border-red-300" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  value={formData.confirmPassword}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number (optional)
              </label>
              <input
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                id="phone"
                name="phone"
                type="tel"
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.phone ? "border-red-300" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={formData.phone}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth (optional)
              </label>
              <input
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                id="dob"
                name="dob"
                type="date"
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.dob ? "border-red-300" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                value={formData.dob}
              />
              {errors.dob && <p className="mt-1 text-sm text-red-600">{errors.dob}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="space-y-4">
            <button
              onClick={handleSubmit}
              type="submit"
              // disabled={!isFormValid() || isLoading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 ${
                isFormValid() && !isLoading ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-300"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              {isLoading ? "Signing up..." : "Sign up"}
            </button>
          </div>

          {/* Terms and Conditions */}
          <div className="text-sm text-center">
            <p className="text-gray-600">
              By signing up, you agree to our{" "}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Privacy Policy
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
import { motion } from "framer-motion";
import { useState } from "react";

const BookingForm = ({ closePopover }: { closePopover: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      closePopover();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg "
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <h2 className="text-2xl text-center font-semibold font-serif text-stone-800 mb-6">
        Book an Appointment
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-bold text-stone-600 mb-2"
          >
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-stone-400 rounded-lg text-stone-700 focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-stone-600 mb-2"
          >
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-stone-400 rounded-lg text-stone-700 focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-bold text-stone-600 mb-2"
          >
            Phone
          </label>
          <input
            required
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-stone-400 rounded-lg text-stone-700 focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="service"
            className="block text-sm font-bold text-stone-600 mb-2"
          >
            Service
          </label>
          <select
            id="service"
            className="w-full px-4 py-2 border border-stone-400 rounded-lg text-stone-700 focus:outline-none "
          >
            <option>Therapeutic Massage</option>
            <option>Organic Facials</option>
            <option>Body Rituals</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="date"
            className="block text-sm font-bold text-stone-600 mb-2"
          >
            Preferred Date
          </label>
          <input
            required
            type="date"
            id="date"
            className="w-full px-4 py-2 border border-stone-400 rounded-lg text-stone-700 focus:outline-none "
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className={`w-full   ${
            isSubmitting
              ? "bg-[#d26444]/50 cursor-not-allowed"
              : "bg-[#d26444] cursor-pointer"
          } hover:scale-105 text-white py-3 rounded-lg font-bold tracking-wider transition-all`}
        >
          {isSubmitting ? "Requesting ..." : "Request Appointment"}
        </button>
      </form>
    </motion.div>
  );
};

export default BookingForm;

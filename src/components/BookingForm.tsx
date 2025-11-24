const BookingForm = ({ closePopover }: { closePopover: () => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closePopover();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
      <h2 className="text-2xl font-serif text-stone-800 mb-6">
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
            type="date"
            id="date"
            className="w-full px-4 py-2 border border-stone-400 rounded-lg text-stone-700 focus:outline-none "
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#d26444] hover:scale-105 text-white py-3 rounded-lg font-bold tracking-wider transition-all"
        >
          Request Appointment
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

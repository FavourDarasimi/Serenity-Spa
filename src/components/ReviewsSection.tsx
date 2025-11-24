import React from "react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      service: "Deep Tissue Massage",
      quote:
        "I’ve been to spas all over the world, but the atmosphere here is unmatched. The therapist found tension I didn't even know I had. I left feeling like a completely new person.",
    },
    {
      id: 2,
      name: "Michael Ross",
      service: "Gentleman’s Facial",
      quote:
        "I was hesitant about getting a facial, but the team made me feel completely at ease. My skin looks clearer than it has in years. Highly professional and discreet.",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      service: "Full Day Package",
      quote:
        "The perfect escape from the city. From the moment you walk in, the smell of lemongrass and the silence just washes over you. Every detail is pure luxury.",
    },
  ];

  return (
    <section className="py-24 bg-white text-stone-800 h-[calc(100vh-var(--nav-h))] flex flex-col justify-center">
      <div className="max-w-6xl px-6 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
            Kind Words
          </span>
          <h2 className="mt-3 text-3xl font-serif md:text-4xl text-stone-800">
            Stories of Relaxation
          </h2>
        </div>

        {/* Review Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col items-center text-center group"
            >
              {/* The Stars */}
              <div className="flex gap-1 mb-6 text-yellow-500/80">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              {/* The Quote */}
              <p className="mb-6 text-lg italic leading-relaxed text-stone-600 font-serif">
                "{review.quote}"
              </p>

              {/* The Author */}
              <div className="mt-auto">
                <h4 className="text-sm font-bold tracking-widest uppercase text-stone-800">
                  {review.name}
                </h4>
                <span className="text-xs text-stone-400 font-medium mt-1 block">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Rahman",
      feedback:
        "Their grooming team is exceptional. My dog received professional care and looked perfect afterward.",
      rating: 5,
    },
    {
      id: 2,
      name: "Hasan Ali",
      feedback:
        "The veterinary support was detailed, accurate, and extremely helpful. My cat recovered quickly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mita Khatun",
      feedback:
        "I felt confident leaving my puppy with them. The boarding experience was safe, clean, and well-organized.",
      rating: 5,
    },
  ];

  return (
    <div className="py-16 bg-[#FAF7F2]">
      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-[#2C1B0E]">
            About WarmPaws
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            WarmPaws is built on a simple foundation — deliver reliable, 
            compassionate, and professional pet care services. 
            We combine experienced hands, a safe environment, and modern 
            pet-care standards to ensure every pet receives exceptional attention.
          </p>
        </div>
      </section>

      {/* Mission + Experience */}
      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-[#2C1B0E]">
              A Commitment to Quality Care
            </h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              From grooming and boarding to veterinary assistance,
              our team provides a fully managed and secure experience for pets
              of all ages. WarmPaws maintains high safety standards, trained
              professionals, and transparent communication — ensuring
              confidence and peace of mind for every pet owner.
            </p>
          </div>

          <div
            className="bg-white p-8 rounded-2xl shadow-lg border border-[#E8DFD6]"
            data-aos="fade-left"
          >
            <h4 className="text-xl font-semibold text-[#2C1B0E] mb-4">
              Our Core Focus
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li>• Certified and trained pet-care specialists</li>
              <li>• Safe, hygienic, and quiet care environments</li>
              <li>• Modern tools, monitoring, and structured care</li>
              <li>• Personalized attention based on pet needs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <h2
          className="text-3xl font-bold text-[#2C1B0E] text-center mb-10"
          data-aos="fade-up"
        >
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-md border border-[#E8DFD6]"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="flex justify-center mb-3 text-[#E0A85C]">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                “{review.feedback}”
              </p>
              <h4 className="mt-4 font-semibold text-[#2C1B0E] text-center">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

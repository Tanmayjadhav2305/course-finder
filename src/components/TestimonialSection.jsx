import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './TestimonialSection.css';

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      rating: 5,
      text: 'This platform completely transformed my career. The courses are comprehensive and the instructors are industry experts. Highly recommended!',
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'UX Designer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      rating: 5,
      text: 'The UI/UX course was exceptional. Practical projects and real-world scenarios made learning engaging and applicable. Worth every penny!',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      rating: 4.5,
      text: 'Great learning experience with hands-on projects. The instructors are responsive and the community is very supportive. Best investment!',
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'DevOps Engineer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      rating: 5,
      text: 'Finally found a platform that teaches modern DevOps practices. The Docker and AWS courses are up-to-date and incredibly useful.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <motion.div
          className="testimonial-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>What Our Students Say</h2>
          <p>Join thousands of learners who have transformed their careers</p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="testimonial-header-card">
                <img src={testimonial.image} alt={testimonial.name} className="avatar" />
                <div className="user-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>

              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(testimonial.rating) ? 'star-filled' : 'star-empty'}
                  />
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialSection;

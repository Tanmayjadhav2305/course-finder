import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, RefreshCw } from 'lucide-react';
import './MotivationalQuote.css';

function MotivationalQuote() {
  const [quote, setQuote] = useState('Education is the most powerful weapon which you can use to change the world.');
  const [author, setAuthor] = useState('Nelson Mandela');
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchQuote = async () => {
    setIsRefreshing(true);
    setLoading(true);
    try {
      // Using a no-CORS friendly API with cache bust parameter
      const timestamp = new Date().getTime();
      const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=inspirational&_t=${timestamp}`, {
        headers: {
          'X-Api-Key': 'dGVzdA=='
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) {
          setQuote(data[0].quote);
          setAuthor(data[0].author || 'Unknown');
          setLoading(false);
          return;
        }
      }
      
      // Fallback to ZenQuotes
      const fallbackResponse = await fetch(`https://zenquotes.io/api/random?_t=${timestamp}`);
      const fallbackData = await fallbackResponse.json();
      
      if (fallbackData && fallbackData.length > 0) {
        setQuote(fallbackData[0].q);
        setAuthor(fallbackData[0].a ? fallbackData[0].a.split(',')[0] : 'Unknown');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quote:', error);
      // Use a pool of quotes as fallback
      const quotePool = [
        { q: 'Education is the most powerful weapon which you can use to change the world.', a: 'Nelson Mandela' },
        { q: 'The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.', a: 'Brian Herbert' },
        { q: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.', a: 'Malcolm X' },
        { q: 'Learning never exhausts the mind.', a: 'Leonardo da Vinci' },
        { q: 'The beautiful thing about learning is that no one can take it away from you.', a: 'B.B. King' },
      ];
      
      const randomQuote = quotePool[Math.floor(Math.random() * quotePool.length)];
      setQuote(randomQuote.q);
      setAuthor(randomQuote.a);
      setLoading(false);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchQuote();
    }, 10000); // Refresh every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="motivational-quote-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="quote-container">
        <motion.div
          className="quote-card"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="quote-icon">
            <Lightbulb size={32} />
          </div>

          <motion.div
            className="quote-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            key={quote} // Force re-animation on quote change
          >
            <p className="quote-text">
              "{loading ? 'Loading inspiration...' : quote}"
            </p>
            <p className="quote-author">
              — {loading ? 'Please wait' : author}
            </p>
          </motion.div>

          <button
            className={`refresh-button ${isRefreshing ? 'refreshing' : ''}`}
            onClick={fetchQuote}
            disabled={isRefreshing}
            title="Get a new quote"
          >
            <RefreshCw size={18} />
          </button>

          <div className="quote-gradient"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default MotivationalQuote;

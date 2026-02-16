import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BOOT_MESSAGES } from '../data/config';

const VISITED_KEY = 'forest_os_visited';

const BootScreen = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [bootDone, setBootDone] = useState(false);
  const [hasVisited] = useState(() => {
    try {
      return localStorage.getItem(VISITED_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const handleComplete = () => {
    try {
      localStorage.setItem(VISITED_KEY, 'true');
    } catch {
      // localStorage not available
    }
    onComplete();
  };

  const handleSkip = () => {
    handleComplete();
  };

  useEffect(() => {
    // Auto-skip for returning visitors
    if (hasVisited) {
      const timer = setTimeout(() => {
        handleComplete();
      }, 500);
      return () => clearTimeout(timer);
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_MESSAGES.length) {
        setLines(prev => [...prev, BOOT_MESSAGES[i]]);
        setProgress(((i + 1) / BOOT_MESSAGES.length) * 100);
        i++;
      } else {
        clearInterval(interval);
        setBootDone(true);
      }
    }, 200);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasVisited]);

  useEffect(() => {
    if (!bootDone || hasVisited) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') handleComplete();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bootDone, hasVisited]);

  // Quick fade for returning visitors
  if (hasVisited) {
    return (
      <motion.div
        className="boot-screen"
        exit={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    );
  }

  return (
    <motion.div className="boot-screen" exit={{ opacity: 0 }}>
      <div className="boot-content">
        <pre className="boot-text">
          {lines.map((line, i) => <div key={i}>{line}</div>)}
          {!bootDone && <span className="boot-cursor">█</span>}
        </pre>

        <div className="boot-progress">
          <div className="boot-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        {bootDone ? (
          <motion.button
            className="boot-continue"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleComplete}
          >
            [ PRESS ENTER OR CLICK TO CONTINUE ]
          </motion.button>
        ) : (
          <motion.button
            className="boot-skip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleSkip}
          >
            [ SKIP ]
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default BootScreen;

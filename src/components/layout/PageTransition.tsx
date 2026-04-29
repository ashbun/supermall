import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../lib/transitions';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}

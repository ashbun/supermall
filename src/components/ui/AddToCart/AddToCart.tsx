import { AnimatePresence, motion } from 'framer-motion';
import { MinusIcon, PlusIcon, TrashIcon } from '../icons';
import './AddToCart.css';

interface AddToCartProps {
  count: number;
  onAdd: () => void;
  onRemove: () => void;
}

export function AddToCart({ count, onAdd, onRemove }: AddToCartProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {count === 0 ? (
        <motion.button
          key="idle"
          className="atc atc--idle"
          onClick={(e) => { e.stopPropagation(); onAdd(); }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Add to cart"
        >
          <PlusIcon size={24} color="var(--supermall-800)" />
        </motion.button>
      ) : (
        <motion.div
          key="active"
          className="atc atc--active"
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0.6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 1 }}
        >
          <button
            className="atc__action"
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            aria-label="Remove one"
          >
            {count === 1
              ? <TrashIcon size={20} color="#fff" />
              : <MinusIcon size={24} color="#fff" />
            }
          </button>
          <motion.span
            className="atc__count"
            key={count}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
          >
            {count}
          </motion.span>
          <button
            className="atc__action"
            onClick={(e) => { e.stopPropagation(); onAdd(); }}
            aria-label="Add one more"
          >
            <PlusIcon size={24} color="#fff" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

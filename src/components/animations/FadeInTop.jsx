import { motion } from 'framer-motion';

const fadeInTop = {
    hidden: { opacity: 0, y: -50 },
    show: (delay) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: 'easeOut',
            delay,
        },
    }),
};

export const FadeInTop = ({ children, delay = 0, className = '' }) => {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            custom={delay}
            variants={fadeInTop}
            className={className}
        >
            {children}
        </motion.div>
    );
};

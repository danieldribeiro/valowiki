/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const pageTransition = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: '0%' },
    exit: { opacity: 0, x:'-100%' },
};

const Transition = ({ children }) => {
    return (
        <motion.div
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    );
};

export default Transition;

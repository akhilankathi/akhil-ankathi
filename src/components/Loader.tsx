import { motion } from "framer-motion"

const Loader = () => {
 
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 via-blue-40 to-white-500 shadow-2xl"
            />

            <motion.p
                className="absolute bottom-20 text-white text-lg tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Loading portfolio...
            </motion.p>
        </div>
    );
};

export default Loader;

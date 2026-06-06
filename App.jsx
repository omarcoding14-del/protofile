import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white p-10">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-10"
      >
        OmarCode | Web Portfolio
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-slate-900 rounded-2xl border border-slate-800"
          >
            <h2 className="text-xl font-bold">Project {i}</h2>
            <p className="text-gray-400">Web Project Description</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
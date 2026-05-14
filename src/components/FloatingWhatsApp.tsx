import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      href="https://wa.me/8801815380600"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-50" />
      <span className="relative flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-110 transition">
        <MessageCircle className="size-6" />
      </span>
    </motion.a>
  );
}

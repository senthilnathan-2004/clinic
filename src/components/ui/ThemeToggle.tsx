import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../hooks/use-theme"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-14 h-8 bg-muted rounded-full p-1 transition-colors flex items-center"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{
          x: theme === "light" ? 0 : 24,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-6 h-6 bg-background rounded-full shadow-sm flex items-center justify-center text-primary"
      >
        {theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
      </motion.div>
    </button>
  )
}

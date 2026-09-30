import { motion } from 'framer-motion'
import { Leaf, Recycle, ShieldCheck, Sparkles } from 'lucide-react'

const highlights = [
  { icon: Sparkles, text: 'AI-powered waste classification in seconds' },
  { icon: Recycle, text: 'Personalized recycling and disposal guidance' },
  { icon: ShieldCheck, text: 'Your data stays private and secure' },
]

function AuthVisualPanel({ eyebrow, title, description }) {
  return (
    <div
      className="relative hidden overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary-muted via-surface to-secondary-muted p-10 lg:flex lg:flex-col lg:justify-between dark:from-primary-muted/40 dark:via-surface dark:to-secondary-muted/40"
      aria-hidden="true"
    >
      <div className="absolute -right-16 -top-16 size-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 size-56 rounded-full bg-secondary/10 blur-3xl" />

      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2 text-primary">
          <Leaf className="size-6" />
          <span className="text-label font-semibold uppercase tracking-wide">
            {eyebrow ?? 'WasteWise-AI'}
          </span>
        </div>

        <h2 className="mt-6 text-h1 text-foreground">{title}</h2>
        <p className="mt-3 max-w-sm text-body text-muted-foreground">{description}</p>
      </motion.div>

      <motion.ul
        className="relative mt-10 space-y-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {highlights.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-3 rounded-xl bg-surface/70 p-3 shadow-sm">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-muted text-primary">
              <Icon className="size-5" />
            </span>
            <span className="text-body-sm font-medium text-foreground">{text}</span>
          </li>
        ))}
      </motion.ul>
    </div>
  )
}

export default AuthVisualPanel
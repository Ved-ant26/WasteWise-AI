import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { fadeUp } from '@/pages/Home/components/homeMotion'

function HomeSection({
  id,
  ariaLabelledby,
  children,
  className = '',
  innerClassName = '',
  noContainer = false,
}) {
  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={className}
      {...fadeUp}
    >
      {noContainer ? children : <div className={cn('ww-container', innerClassName)}>{children}</div>}
    </motion.section>
  )
}

export default HomeSection

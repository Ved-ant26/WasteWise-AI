import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertCircle, Eye, EyeOff, UserPlus } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import AuthVisualPanel from '@/components/common/AuthVisualPanel'
import { useForm } from '@/hooks/useAppForm'
import { useAuth } from '@/hooks/useAuth'
import { ROUTES } from '@/constants/routes'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Register() {
  const { register: registerUser } = useAuth()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [authError, setAuthError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  })

  const passwordValue = watch('password')

  async function onSubmit(data) {
    if (isSubmitting) return

    // Confirm-password is also validated inline by react-hook-form; this is
    // a defensive second check before we ever call Firebase.
    if (data.password !== data.confirmPassword) {
      setAuthError('Passwords do not match.')
      return
    }

    setIsSubmitting(true)
    setAuthError('')

    try {
      await registerUser({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      })
      navigate(ROUTES.DASHBOARD, { replace: true })
    } catch (error) {
      setAuthError(error.message)
      setIsSubmitting(false)
    }
  }

  return (
    <section className="ww-container py-page-y sm:py-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
        <AuthVisualPanel
          eyebrow="Join WasteWise-AI"
          title="Start turning everyday waste into insight."
          description="Create an account to classify waste with AI, follow personalized disposal guidance, and track your sustainability progress over time."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <Card className="mx-auto w-full max-w-md lg:max-w-none" padding="lg">
            <div className="mb-6">
              <h1 className="text-h1 tracking-tight text-foreground">
                Create Your WasteWise-AI Account
              </h1>
              <p className="mt-2 text-body text-muted-foreground">
                Create an account to start tracking and understanding your waste.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Input
                type="text"
                label="Full name"
                placeholder="Jane Doe"
                autoComplete="name"
                error={errors.fullName?.message}
                {...register('fullName', {
                  required: 'Full name is required',
                  minLength: { value: 2, message: 'Enter your full name' },
                })}
              />

              <Input
                type="email"
                label="Email address"
                placeholder="you@example.com"
                autoComplete="email"
                error={errors.email?.message}
                {...register('email', {
                  required: 'Email address is required',
                  pattern: { value: EMAIL_PATTERN, message: 'Enter a valid email address' },
                })}
              />

              <Input
                type={showPassword ? 'text' : 'password'}
                label="Password"
                placeholder="Create a password"
                autoComplete="new-password"
                error={errors.password?.message}
                endAdornment={
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword}
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" aria-hidden="true" />
                    ) : (
                      <Eye className="size-4" aria-hidden="true" />
                    )}
                  </button>
                }
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Password must be at least 8 characters' },
                })}
              />

              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                label="Confirm password"
                placeholder="Re-enter your password"
                autoComplete="new-password"
                error={errors.confirmPassword?.message}
                endAdornment={
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((value) => !value)}
                    className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showConfirmPassword}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="size-4" aria-hidden="true" />
                    ) : (
                      <Eye className="size-4" aria-hidden="true" />
                    )}
                  </button>
                }
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) => value === passwordValue || 'Passwords do not match',
                })}
              />

              <div className="space-y-1.5">
                <label className="flex items-start gap-2 text-body-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    className="mt-0.5 size-4 shrink-0 rounded border-border text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-invalid={errors.acceptTerms ? 'true' : undefined}
                    {...register('acceptTerms', {
                      required: 'You must accept the Terms and Privacy Policy',
                    })}
                  />
                  <span>
                    I agree to the{' '}
                    <span className="font-medium text-primary">Terms of Service</span> and{' '}
                    <span className="font-medium text-primary">Privacy Policy</span>.
                  </span>
                </label>
                {errors.acceptTerms && (
                  <p className="text-body-sm text-error" role="alert">
                    {errors.acceptTerms.message}
                  </p>
                )}
              </div>

              {authError && (
                <p
                  className="flex items-start gap-2 rounded-lg bg-error-muted px-3 py-2 text-body-sm text-error-foreground"
                  role="alert"
                >
                  <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {authError}
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                <UserPlus className="size-4" aria-hidden="true" />
                Create account
              </Button>
            </form>

            <p className="mt-6 text-center text-body-sm text-muted-foreground">
              Already have an account?{' '}
              <Link
                to={ROUTES.LOGIN}
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Register
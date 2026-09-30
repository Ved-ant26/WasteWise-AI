import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Eye, EyeOff, LogIn } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import AuthVisualPanel from '@/components/common/AuthVisualPanel'
import { useForm } from '@/hooks/useAppForm'
import { useAuth } from '@/hooks/useAuth'
import { ROUTES } from '@/constants/routes'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Login() {
  const { login, resetPassword } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = location.state?.from?.pathname ?? ROUTES.DASHBOARD

  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [authError, setAuthError] = useState('')

  // 'idle' | 'sending' | 'sent' | 'error'
  const [resetStatus, setResetStatus] = useState('idle')
  const [resetMessage, setResetMessage] = useState('')

  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: { email: '', password: '', rememberMe: true },
  })

  async function onSubmit(data) {
    if (isSubmitting) return

    setIsSubmitting(true)
    setAuthError('')

    try {
      await login({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      })
      navigate(redirectTo, { replace: true })
    } catch (error) {
      setAuthError(error.message)
      setIsSubmitting(false)
    }
  }

  async function handleForgotPassword() {
    const isEmailValid = await trigger('email')

    if (!isEmailValid) {
      setResetStatus('error')
      setResetMessage('Enter your email address above, then select "Forgot password?" again.')
      return
    }

    setResetStatus('sending')
    setResetMessage('')

    try {
      await resetPassword(getValues('email'))
      setResetStatus('sent')
      setResetMessage('Password reset email sent. Check your inbox for further instructions.')
    } catch (error) {
      setResetStatus('error')
      setResetMessage(error.message)
    }
  }

  return (
    <section className="ww-container py-page-y sm:py-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
        <AuthVisualPanel
          title="Welcome back to smarter waste management."
          description="Sign in to track your waste footprint, review AI classifications, and keep your sustainability goals on course."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <Card className="mx-auto w-full max-w-md lg:max-w-none" padding="lg">
            <div className="mb-6">
              <h1 className="text-h1 tracking-tight text-foreground">Welcome Back</h1>
              <p className="mt-2 text-body text-muted-foreground">
                Sign in to continue to your WasteWise-AI account.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
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
                placeholder="Enter your password"
                autoComplete="current-password"
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
                {...register('password', { required: 'Password is required' })}
              />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="flex items-center gap-2 text-body-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-border text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...register('rememberMe')}
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={resetStatus === 'sending'}
                  className="rounded-sm text-body-sm font-medium text-primary underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-60"
                >
                  {resetStatus === 'sending' ? 'Sending reset email…' : 'Forgot password?'}
                </button>
              </div>

              {resetMessage && (
                <p
                  className={`flex items-start gap-2 rounded-lg px-3 py-2 text-body-sm ${
                    resetStatus === 'sent'
                      ? 'bg-success-muted text-success-foreground'
                      : 'bg-error-muted text-error-foreground'
                  }`}
                  role="status"
                >
                  {resetStatus === 'sent' ? (
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  ) : (
                    <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  )}
                  {resetMessage}
                </p>
              )}

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
                <LogIn className="size-4" aria-hidden="true" />
                Log in
              </Button>
            </form>

            <p className="mt-6 text-center text-body-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link
                to={ROUTES.REGISTER}
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                Create one
              </Link>
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Login
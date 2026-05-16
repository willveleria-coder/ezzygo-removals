'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, ArrowLeft, Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  return (
    <main className="min-h-screen relative grain-overlay overflow-hidden">
      <div className="aurora bg-ember-500" style={{ width: 700, height: 700, top: -200, left: -200, opacity: 0.3 }} />
      <div className="aurora bg-amber-500" style={{ width: 500, height: 500, bottom: -200, right: -100, opacity: 0.25 }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-ember-400 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)] mt-4">
          {/* Left: branding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <Link href="/" className="inline-flex items-center gap-3 mb-12">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-ember-400 to-amber-500 flex items-center justify-center">
                <Truck className="h-6 w-6 text-ink-900" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display text-2xl leading-none">EzzyGo</div>
                <div className="text-xs uppercase tracking-[0.2em] text-ember-400 font-mono mt-1">
                  Customer Portal
                </div>
              </div>
            </Link>

            <h1 className="font-display text-5xl xl:text-6xl leading-[1.05] tracking-tight">
              Welcome back.{' '}
              <span className="italic text-gradient-ember">
                Your move awaits.
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-md leading-relaxed">
              Manage your bookings, track your move in real time, view past
              quotes and contact your crew — all in one place.
            </p>

            <div className="mt-12 space-y-4">
              {[
                'Track your move live',
                'Re-book with one tap',
                'Saved quotes & history',
                'Direct line to your crew',
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-ember-400" />
                  <span className="text-white/70">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0"
          >
            <div className="glass rounded-3xl p-8 lg:p-10">
              <div className="lg:hidden flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-ember-400 to-amber-500 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-ink-900" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-display text-lg leading-none">
                    EzzyGo
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-ember-400 font-mono mt-0.5">
                    Customer Portal
                  </div>
                </div>
              </div>

              {/* Toggle */}
              <div className="flex p-1 bg-white/[0.03] rounded-full mb-8 border border-white/5">
                <button
                  onClick={() => setMode('signin')}
                  className={`flex-1 py-2 text-sm rounded-full transition-all ${
                    mode === 'signin'
                      ? 'bg-gradient-to-br from-ember-400 to-amber-500 text-ink-900 font-medium'
                      : 'text-white/60'
                  }`}
                >
                  Sign in
                </button>
                <button
                  onClick={() => setMode('signup')}
                  className={`flex-1 py-2 text-sm rounded-full transition-all ${
                    mode === 'signup'
                      ? 'bg-gradient-to-br from-ember-400 to-amber-500 text-ink-900 font-medium'
                      : 'text-white/60'
                  }`}
                >
                  Sign up
                </button>
              </div>

              <h2 className="font-display text-3xl mb-2">
                {mode === 'signin' ? 'Sign in' : 'Create account'}
              </h2>
              <p className="text-sm text-white/50 mb-8">
                {mode === 'signin'
                  ? 'Enter your details to access your bookings.'
                  : 'Get started in under a minute.'}
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Demo only — backend not connected. We\'ll wire this up next.');
                }}
              >
                {mode === 'signup' && (
                  <FormField
                    icon={Mail}
                    label="Full name"
                    type="text"
                    placeholder="Jane Doe"
                  />
                )}
                <FormField
                  icon={Mail}
                  label="Email"
                  type="email"
                  placeholder="you@email.com"
                />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 font-mono">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <input
                      type={showPass ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-ember-500/60 focus:outline-none focus:ring-1 focus:ring-ember-500/40 transition text-white placeholder:text-white/30"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                    >
                      {showPass ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {mode === 'signin' && (
                  <div className="flex justify-between items-center text-xs">
                    <label className="flex items-center gap-2 text-white/60 cursor-pointer">
                      <input type="checkbox" className="accent-ember-500" />
                      Remember me
                    </label>
                    <Link
                      href="#"
                      className="text-ember-400 hover:text-amber-300"
                    >
                      Forgot password?
                    </Link>
                  </div>
                )}

                <button type="submit" className="btn-primary w-full mt-2">
                  {mode === 'signin' ? 'Sign in' : 'Create account'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="my-7 flex items-center gap-4 text-xs text-white/30 font-mono uppercase tracking-widest">
                <div className="flex-1 h-px bg-white/10" />
                or
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <button className="btn-ghost w-full">
                Continue with Google
              </button>
            </div>

            <p className="text-center text-xs text-white/40 mt-6">
              Protected with industry-standard encryption.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

function FormField({
  icon: Icon,
  label,
  type,
  placeholder,
}: {
  icon: any;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 font-mono">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-ember-500/60 focus:outline-none focus:ring-1 focus:ring-ember-500/40 transition text-white placeholder:text-white/30"
        />
      </div>
    </div>
  );
}

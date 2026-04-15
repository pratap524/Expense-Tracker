import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./api/auth";
import { setAuthSession } from "./auth/session";

function SignupPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = "Sign Up | Expense Tracker React";
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const normalizedFullName = fullName.trim();
    const normalizedEmail = email.trim();

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await registerUser({ fullName: normalizedFullName, email: normalizedEmail, password });

      setAuthSession({ fullName: normalizedFullName, email: normalizedEmail });

      navigate("/dashboard-3");
    } catch (error) {
      setErrorMessage(error.message || "Unable to create account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <header className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="material-symbols-outlined text-xl text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              architecture
            </span>
          </div>
          <span className="font-headline text-2xl font-bold tracking-tighter text-slate-50">Architect</span>
        </div>
        <div>
          <a className="font-label text-sm font-medium text-on-surface-variant transition-colors hover:text-primary" href="#">
            Help Center
          </a>
        </div>
      </header>

      <main className="relative flex flex-grow items-center justify-center overflow-hidden px-6 py-24">
        <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-tertiary/5 blur-[100px]" />

        <div className="z-10 w-full max-w-[480px]">
          <div className="glass-panel rounded-xl p-8 shadow-2xl md:p-12">
            <div className="mb-10">
              <h1 className="mb-2 font-headline text-3xl font-extrabold tracking-tight text-on-surface">Build your future.</h1>
              <p className="body-md text-on-surface-variant">Secure wealth management for the modern era.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
              <div className="space-y-2">
                <label className="ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="full-name">
                  Full Name
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="material-symbols-outlined text-lg text-outline">person</span>
                  </div>
                  <input
                    id="full-name"
                    name="signup_full_name_field"
                    type="text"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    autoComplete="off"
                    placeholder="Johnathan Sterling"
                    className="w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
                    style={{ color: '#e4e4f0', background: 'none', position: 'relative', zIndex: 1 }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="material-symbols-outlined text-lg text-outline">mail</span>
                  </div>
                  <input
                    id="email"
                    name="signup_email_field"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="off"
                    placeholder="john@architect.com"
                    className="w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="material-symbols-outlined text-lg text-outline">lock</span>
                  </div>
                  <input
                    id="password"
                    name="signup_password_field"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="new-password"
                    placeholder="••••••••••••"
                    className="w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  className="bg-architect-gradient w-full rounded-xl py-4 font-headline text-lg font-bold text-slate-50 shadow-lg shadow-primary/10 transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating account..." : "Create Account"}
                </button>
              </div>

              {errorMessage ? <p className="text-sm text-error">{errorMessage}</p> : null}
            </form>

            <p className="mt-10 text-center font-body text-sm text-on-surface-variant">
              Already have an account?{" "}
              <Link className="ml-1 font-bold text-primary hover:underline" to="/login">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 opacity-40">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">security</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Bank-Grade Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">SIPC Protected</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto flex w-full flex-col items-center gap-4 bg-slate-950 py-8 text-center">
        <p className="font-inter text-xs uppercase tracking-wide text-slate-500">© 2024 Architect Financial. Structural Serenity.</p>
        <div className="flex gap-6">
          <a className="font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300" href="#">
            Terms
          </a>
          <a className="font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300" href="#">
            Privacy
          </a>
          <a className="font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300" href="#">
            Security
          </a>
        </div>
      </footer>
    </div>
  );
}

export default SignupPage;

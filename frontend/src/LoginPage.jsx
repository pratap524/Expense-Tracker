import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./api/auth";
import { setAuthSession } from "./auth/session";

function LoginPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = "Login | Expense Tracker React";
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const result = await loginUser({ email, password });

      setAuthSession({
        accessToken: result.access_token,
        refreshToken: result.refresh_token,
        fullName: result.user?.full_name,
        email: result.user?.email,
      });

      navigate("/dashboard-3");
    } catch (error) {
      setErrorMessage(error.message || "Unable to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background px-6 py-12 font-body text-on-surface antialiased selection:bg-primary/30">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-tertiary/5 blur-[120px]" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            alt="Architectural skyscraper detail"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA48QYAS8tMiV2OzMwBUCVv_aK8pVacsNGqsvygBgyn7a9WjQng5iKgDlmVfDujUphsXgeqtGkprCVS4O1dfh1Yb6cKxn677incNxdlRsOcSYMSjr8-ZX6ohOeWOW5wCfS20Eferbxtj2munJJHb0mUv8twoNag7Y5nwVCtN-JvdQBlnW6DPkPMtZfUUgvC9eWMO933Pz_F-FM4UlOvloRWUAZVpsF8DdW04RwuJCTEYbXS0EKXJ7BaZ05prB0MUpuFYi25_0pMhxc"
          />
        </div>
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-md items-center justify-center">
        <div className="w-full">
          <div className="glass-card rounded-xl border border-outline-variant/10 p-10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] xl:p-12">
            <div className="mb-10 text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-surface-container-highest p-3">
                <span className="material-symbols-outlined text-3xl text-primary">account_balance</span>
              </div>
              <h1 className="mb-2 font-headline text-3xl font-black tracking-tight text-on-surface">Architect</h1>
              <p className="font-label text-sm font-medium uppercase tracking-widest text-on-surface-variant">Wealth Management</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="ml-1 block font-label text-xs font-semibold text-on-surface-variant" htmlFor="email">
                  EMAIL ADDRESS
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="material-symbols-outlined text-lg text-on-surface-variant">mail</span>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    className="block w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="ml-1 flex items-center justify-between">
                  <label className="block font-label text-xs font-semibold text-on-surface-variant" htmlFor="password">
                    PASSWORD
                  </label>
                  <a className="text-xs font-semibold text-primary transition-colors hover:text-primary-fixed" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="material-symbols-outlined text-lg text-on-surface-variant">lock</span>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="block w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-12 text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                  <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-on-surface-variant transition-colors hover:text-on-surface" type="button">
                    <span className="material-symbols-outlined text-lg">visibility</span>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  className="editorial-gradient w-full rounded-xl py-4 font-headline font-bold text-on-primary-fixed shadow-lg transition-all duration-200 hover:scale-[1.01] hover:shadow-primary/20 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </div>

              {errorMessage ? <p className="text-sm text-error">{errorMessage}</p> : null}
            </form>

            <div className="mt-10 text-center">
              <p className="text-sm text-on-surface-variant">
                New to Architect?{" "}
                <Link className="font-bold text-primary transition-colors hover:text-primary-fixed" to="/signup">
                  Create your account
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-6 text-xs font-label uppercase tracking-widest text-outline opacity-50">
            <a className="transition-colors hover:text-on-surface" href="#">
              Privacy Policy
            </a>
            <a className="transition-colors hover:text-on-surface" href="#">
              Terms of Service
            </a>
            <a className="transition-colors hover:text-on-surface" href="#">
              System Status
            </a>
          </div>
        </div>
      </main>

      <div className="pointer-events-none fixed bottom-0 left-0 z-20 h-32 w-full bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export default LoginPage;

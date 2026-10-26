
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  LockKeyhole,
  Mail,
  UserRound,
  Flame,
  Eye,
  EyeOff,
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;

export default function LoginPage() {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!supabase) {
      setMessage(
        "Login is not connected yet. Please check the Supabase environment variables in Vercel."
      );
      return;
    }

    if (password.length < 6) {
      setMessage("Your password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      if (isSignup) {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: { full_name: name.trim() },
          },
        });

        if (error) throw error;

        setMessage(
          "Your account request was submitted. Check your email if confirmation is required."
        );
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) throw error;

        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "28px 16px",
    background:
      "radial-gradient(ellipse at top right, #e8f4d5 0%, transparent 42%), #f8faf4",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#173d22",
  } as const;

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box" as const,
    height: 49,
    padding: "0 14px",
    border: "1px solid #dce5d6",
    borderRadius: 12,
    background: "#fcfdf9",
    color: "#173d22",
    fontSize: 14,
    outline: "none",
  };

  return (
    <main style={pageStyle}>
      <section
        style={{
          width: "100%",
          maxWidth: 440,
          padding: "32px 28px",
          boxSizing: "border-box",
          background: "#fff",
          border: "1px solid #e6ecdf",
          borderRadius: 24,
          boxShadow: "0 24px 70px rgba(23, 61, 34, 0.09)",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "#647565",
            textDecoration: "none",
            fontSize: 13,
          }}
        >
          <ArrowLeft size={16} />
          Back to Gas4You
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 32,
            fontSize: 25,
            fontWeight: 900,
            letterSpacing: -1,
          }}
        >
          <span
            style={{
              display: "grid",
              placeItems: "center",
              width: 42,
              height: 42,
              borderRadius: 13,
              background: "#173d22",
              color: "#c8f169",
            }}
          >
            <Flame size={24} />
          </span>
          <span>
            Gas4<span style={{ color: "#80a943" }}>You</span>
          </span>
        </div>

        <p
          style={{
            marginTop: 30,
            marginBottom: 9,
            color: "#739744",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          YOUR GAS, MADE SIMPLE
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: 35,
            lineHeight: 1.2,
            letterSpacing: -1.5,
            fontWeight: 850,
          }}
        >
          {isSignup ? "Create account." : "Welcome back."}
        </h1>

        <p
          style={{
            color: "#748074",
            fontSize: 14,
            lineHeight: 1.8,
            marginTop: 12,
            marginBottom: 26,
          }}
        >
          {isSignup
            ? "Join Gas4You and make managing your cooking gas easier."
            : "Log in to your customer account to continue with Gas4You."}
        </p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 11 }}>
          {isSignup && (
            <>
              <label
                htmlFor="full-name"
                style={{ fontSize: 12, fontWeight: 700 }}
              >
                Full name
              </label>

              <div style={{ position: "relative" }}>
                <UserRound
                  size={17}
                  style={{
                    position: "absolute",
                    left: 14,
                    top: 16,
                    color: "#879487",
                  }}
                />

                <input
                  id="full-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  style={{ ...inputStyle, paddingLeft: 42 }}
                />
              </div>
            </>
          )}

          <label
            htmlFor="email"
            style={{ fontSize: 12, fontWeight: 700, marginTop: 5 }}
          >
            Email address
          </label>

          <div style={{ position: "relative" }}>
            <Mail
              size={17}
              style={{
                position: "absolute",
                left: 14,
                top: 16,
                color: "#879487",
              }}
            />

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              style={{ ...inputStyle, paddingLeft: 42 }}
            />
          </div>

          <label
            htmlFor="password"
            style={{ fontSize: 12, fontWeight: 700, marginTop: 5 }}
          >
            Password
          </label>

          <div style={{ position: "relative" }}>
            <LockKeyhole
              size={17}
              style={{
                position: "absolute",
                left: 14,
                top: 16,
                color: "#879487",
              }}
            />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete={isSignup ? "new-password" : "current-password"}
              placeholder="At least 6 characters"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={6}
              required
              style={{
                ...inputStyle,
                paddingLeft: 42,
                paddingRight: 45,
              }}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              style={{
                position: "absolute",
                right: 12,
                top: 13,
                border: 0,
                background: "transparent",
                color: "#748074",
                cursor: "pointer",
                padding: 3,
              }}
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>

          {message && (
            <p
              role="status"
              style={{
                margin: "5px 0",
                padding: 12,
                borderRadius: 10,
                background: "#f3f7eb",
                color: "#526c36",
                fontSize: 12,
                lineHeight: 1.7,
                overflowWrap: "anywhere",
              }}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              width: "100%",
              minHeight: 51,
              marginTop: 12,
              border: 0,
              borderRadius: 12,
              background: loading ? "#78916f" : "#173d22",
              color: "#fff",
              fontSize: 14,
              fontWeight: 800,
              cursor: loading ? "wait" : "pointer",
            }}
          >
            {loading
              ? "Please wait..."
              : isSignup
                ? "Create my account"
                : "Log in"}
            {!loading && <ArrowRight size={17} />}
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            color: "#748074",
            fontSize: 13,
            lineHeight: 1.8,
            marginTop: 23,
          }}
        >
          {isSignup ? "Already have an account? " : "New to Gas4You? "}

          <button
            type="button"
            onClick={() => {
              setIsSignup(!isSignup);
              setMessage("");
            }}
            style={{
              border: 0,
              padding: 0,
              background: "transparent",
              color: "#527d2e",
              fontWeight: 800,
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            {isSignup ? "Log in" : "Create an account"}
          </button>
        </p>

        <div
          style={{
            marginTop: 24,
            paddingTop: 19,
            borderTop: "1px solid #edf0e9",
            color: "#879187",
            textAlign: "center",
            fontSize: 11,
            lineHeight: 1.8,
          }}
        >
          Need help?{" "}
          <a
            href="mailto:adedapoadedamola3@gmail.com"
            style={{ color: "#527d2e", fontWeight: 700 }}
          >
            Contact Gas4You support
          </a>

          <p style={{ margin: "12px 0 0" }}>
            © {new Date().getFullYear()} Gas4You. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}

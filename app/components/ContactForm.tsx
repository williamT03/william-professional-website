"use client";

import { type FormEvent, useState } from "react";
import { siteProfile } from "@/app/data/siteData";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState("Fill out the note and I will open your email app.");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams({
      subject: `Portfolio inquiry from ${formState.name}`,
      body: `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
    });

    window.location.href = `mailto:${siteProfile.email}?${params.toString()}`;
    setStatus("Opening your default email app with your message drafted.");
    setFormState(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel space-y-5 p-6 text-white sm:p-8">
      <div className="space-y-2">
        <p className="section-pill section-pill-water">Send A Message</p>
        <h3 className="font-[family-name:var(--font-display)] text-4xl leading-none">
          Start the conversation.
        </h3>
        <p className="text-sm leading-7 text-white/75">
          This form drafts an email to {siteProfile.email} using your default mail app.
        </p>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white/80">Your name</span>
        <input
          type="text"
          name="name"
          required
          value={formState.name}
          onChange={(event) =>
            setFormState((current) => ({ ...current, name: event.target.value }))
          }
          className="contact-input"
          placeholder="William would love to know who is reaching out"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white/80">Email address</span>
        <input
          type="email"
          name="email"
          required
          value={formState.email}
          onChange={(event) =>
            setFormState((current) => ({ ...current, email: event.target.value }))
          }
          className="contact-input"
          placeholder="you@example.com"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white/80">What would you like to build?</span>
        <textarea
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={(event) =>
            setFormState((current) => ({ ...current, message: event.target.value }))
          }
          className="contact-input resize-none"
          placeholder="Share the project, role, or idea you want to talk through."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-water-4)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Draft Email
        </button>
        <p className="text-sm leading-6 text-white/65">{status}</p>
      </div>
    </form>
  );
}

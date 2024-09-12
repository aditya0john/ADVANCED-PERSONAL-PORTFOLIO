import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://596bfaa21e985caa7cd6b02bd6df295c@o4507917833207808.ingest.us.sentry.io/4507917835567104",

  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

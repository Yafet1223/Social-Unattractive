# Unscroll Mobile

Unscroll is an AI-driven social media detox platform built with Expo and React Native. It helps users reduce unhealthy social media consumption by tracking usage patterns, analyzing recommendation behavior, and reshaping feeds to make scrolling more intentional.

## App Overview

### Key features

- **Usage analytics** — monitor daily and weekly social media habits with charts, streaks, and app breakdowns.
- **Focus lock** — start distraction-free sessions that block apps and keep your attention on real life.
- **Smart onboarding** — guide users through detox goals and encourage healthier browsing habits.
- **Settings and personalization** — toggle sleep guard, intention checks, detox modes, and notification preferences.
- **Tab-based navigation** — fast access to home, analytics, focus, and settings screens.

## Project structure

- `app/` — Expo Router entry points and screens.
  - `app/_layout.tsx` — root stack layout for onboarding and tabs.
  - `app/(tabs)/_layout.tsx` — tab navigator layout.
  - `app/(tabs)/index.tsx` — dashboard home screen.
  - `app/(tabs)/analytics.tsx` — analytics overview screen.
  - `app/(tabs)/focus.tsx` — focus lock timer screen.
  - `app/(tabs)/settings.tsx` — user preferences screen.
  - `app/onboarding.tsx` — onboarding flow.
- `components/` — reusable UI and themed components.
- `hooks/` — custom hooks for theme and color scheme handling.
- `assets/` — images and app assets.

## Setup

1. Install dependencies

```bash
npm install
```

2. Start the Expo app

```bash
npx expo start
```

3. Open on your device or emulator

- Use the Expo Go app on Android or iOS
- Use an Android emulator or iOS simulator

## Development notes

- The project uses `nativewind` for utility styling and `expo-router` for file-based routing.
- The theme is handled using custom `ThemedView` and `ThemedText` components.
- The focus timer uses a React hook-based countdown that updates remaining session time.

## Useful scripts

- `npm run start` — start Expo development server
- `npm run android` — open on Android device/emulator
- `npm run ios` — open on iOS simulator
- `npm run web` — open in a browser
- `npm run lint` — run Expo linting checks

## Goal

This app is designed to help people regain control over social media by making usage visible, reducing addictive feed behavior, and supporting deliberate, healthier engagement.

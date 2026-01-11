export const userOnboardingImages = {
  startJourney: require('@/assets/user-onboarding/start-journey.png'),
  notification: require('@/assets/user-onboarding/notification.png'),
  journeyBegins: require('@/assets/user-onboarding/journey-begins.png'),
  journeyComplete: require('@/assets/user-onboarding/journey-complete.png'),
  protectionShield: require('@/assets/user-onboarding/protection-shield.png'),
} as const;

export type UserOnboardingIllustrationKey = keyof typeof userOnboardingImages;

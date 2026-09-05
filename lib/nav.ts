import { NavigatorScreenParams } from '@react-navigation/native';

export type TabParamList = {
  Home: undefined;
  Identify: undefined;
  Library: undefined;
  Remedies: undefined;
  Traditions: undefined;
};

export type RootStackParamList = {
  Onboarding: undefined;
  Tabs: NavigatorScreenParams<TabParamList> | undefined;
  HerbDetail: { id: string };
  RemedyDetail: { id: string };
  TraditionDetail: { id: string };
  Safety: undefined;
};

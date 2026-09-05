import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GlyphName } from './components/ui';
import { RootStackParamList, TabParamList } from './lib/nav';
import { StoreProvider, useStore } from './lib/store';
import { ThemeProvider, useThemeMeta } from './lib/themeContext';
import HerbDetailScreen from './screens/HerbDetailScreen';
import HomeScreen from './screens/HomeScreen';
import IdentifyScreen from './screens/IdentifyScreen';
import LibraryScreen from './screens/LibraryScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import RemedyDetailScreen from './screens/RemedyDetailScreen';
import RemediesScreen from './screens/RemediesScreen';
import SafetyScreen from './screens/SafetyScreen';
import TraditionDetailScreen from './screens/TraditionDetailScreen';
import TraditionsScreen from './screens/TraditionsScreen';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const TAB_ICONS: Record<keyof TabParamList, [GlyphName, GlyphName]> = {
  Home: ['home', 'home-outline'],
  Identify: ['scan', 'scan-outline'],
  Library: ['leaf', 'leaf-outline'],
  Remedies: ['flask', 'flask-outline'],
  Traditions: ['sparkles', 'sparkles-outline'],
};

function Tabs() {
  const { p, isDark } = useThemeMeta();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: p.primary,
        tabBarInactiveTintColor: p.textFaint,
        tabBarStyle: {
          backgroundColor: isDark ? p.surface : p.bgAlt,
          borderTopColor: p.border,
          borderTopWidth: 1,
          height: 66,
          paddingTop: 8,
          paddingBottom: 10,
        },
        tabBarLabelStyle: { fontSize: 10.5, fontWeight: '700', letterSpacing: 0.1 },
        tabBarIcon: ({ color, size, focused }) => {
          const pair = TAB_ICONS[route.name];
          return <Ionicons name={focused ? pair[0] : pair[1]} size={size - 3} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Ìlé' }} />
      <Tab.Screen name="Identify" component={IdentifyScreen} options={{ tabBarLabel: 'Ìwò' }} />
      <Tab.Screen name="Library" component={LibraryScreen} options={{ tabBarLabel: 'Ìwé' }} />
      <Tab.Screen name="Remedies" component={RemediesScreen} options={{ tabBarLabel: 'Ògùn' }} />
      <Tab.Screen name="Traditions" component={TraditionsScreen} options={{ tabBarLabel: 'Ìṣẹ̀' }} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { p, isDark } = useThemeMeta();
  const { onboarded, ready } = useStore();

  const base = isDark ? DarkTheme : DefaultTheme;
  const navTheme = {
    ...base,
    dark: isDark,
    colors: {
      ...base.colors,
      background: p.bg,
      card: isDark ? p.surface : p.bgAlt,
      text: p.text,
      border: p.border,
      primary: p.primary,
      notification: p.gold,
    },
  };

  if (!ready) {
    return (
      <View style={{ flex: 1, backgroundColor: p.bg, alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name="leaf" size={30} color={p.primary} />
        <ActivityIndicator color={p.primary} style={{ marginTop: 16 }} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: p.bg },
        }}
      >
        {onboarded ? (
          <>
            <Stack.Screen name="Tabs" component={Tabs} options={{ animation: 'fade' }} />
            <Stack.Screen name="HerbDetail" component={HerbDetailScreen} />
            <Stack.Screen name="RemedyDetail" component={RemedyDetailScreen} />
            <Stack.Screen name="TraditionDetail" component={TraditionDetailScreen} />
            <Stack.Screen name="Safety" component={SafetyScreen} />
          </>
        ) : (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ animation: 'fade' }} />
        )}
      </Stack.Navigator>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({ ...Ionicons.font });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StoreProvider>
          <RootNavigator />
        </StoreProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

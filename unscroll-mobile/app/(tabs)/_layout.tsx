// import { Tabs } from 'expo-router';
// import React from 'react';

// import { HapticTab } from '@/components/haptic-tab';
// import { IconSymbol } from '@/components/ui/icon-symbol';
// import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }
// import "../global.css";
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

function TabIcon({ label, icon, focused }: { label: string; icon: string; focused: boolean }) {
  return (
    <View className="items-center justify-center" style={{ gap: 4, paddingTop: 8 }}>
      <Text style={{ fontSize: 20 }}>{icon}</Text>
      <Text
        style={{
          fontFamily: 'Courier New',
          fontSize: 9,
          letterSpacing: 1,
          color: focused ? '#ff3b3b' : '#555',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </Text>
      {focused && <View style={{ width: 16, height: 2, backgroundColor: '#ff3b3b', borderRadius: 1 }} />}
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0a0a0a',
          borderTopColor: 'rgba(255,255,255,0.06)',
          borderTopWidth: 1,
          height: 80,
          paddingBottom: 10,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ tabBarIcon: ({ focused }) => <TabIcon label="Home" icon="⌂" focused={focused} /> }}
      />
      <Tabs.Screen
        name="analytics"
        options={{ tabBarIcon: ({ focused }) => <TabIcon label="Stats" icon="◈" focused={focused} /> }}
      />
      <Tabs.Screen
        name="focus"
        options={{ tabBarIcon: ({ focused }) => <TabIcon label="Focus" icon="◉" focused={focused} /> }}
      />
      <Tabs.Screen
        name="settings"
        options={{ tabBarIcon: ({ focused }) => <TabIcon label="Settings" icon="⚙" focused={focused} /> }}
      />
    </Tabs>
  );
}

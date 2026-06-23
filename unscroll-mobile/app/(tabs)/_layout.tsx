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

import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const APPS = [
  { name: 'TikTok', time: '1h 20m', pct: 75, color: '#ff3b3b' },
  { name: 'Instagram', time: '45m', pct: 45, color: '#ff8c00' },
  { name: 'Twitter', time: '20m', pct: 20, color: '#ffcc00' },
  { name: 'YouTube', time: '15m', pct: 15, color: '#ff6b6b' },
];

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function SectionLabel({ text }: { text: string }) {
  return (
    <View className="flex-row items-center mb-4" style={{ gap: 10 }}>
      <View style={{ width: 24, height: 1, backgroundColor: '#ff3b3b' }} />
      <Text className="text-red-500 text-xs tracking-widest uppercase" style={{ fontFamily: 'Courier New' }}>{text}</Text>
    </View>
  );
}

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-4 pb-10">

          {/* Header */}
          <View className="flex-row justify-between items-center mb-8">
            <View>
              <Text className="text-gray-500 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Courier New' }}>Good morning</Text>
              <Text className="text-white font-black text-2xl" style={{ letterSpacing: -1 }}>Dashboard</Text>
            </View>
            <View style={{ width: 38, height: 38, borderRadius: 12, backgroundColor: 'rgba(255,59,59,0.15)', borderWidth: 1, borderColor: 'rgba(255,59,59,0.3)', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16 }}>✕</Text>
            </View>
          </View>

          {/* Addiction Score Card */}
          <View className="rounded-2xl p-6 mb-4" style={{ backgroundColor: 'rgba(255,59,59,0.06)', borderWidth: 1, borderColor: 'rgba(255,59,59,0.2)' }}>
            <SectionLabel text="Addiction Score" />
            <View className="flex-row items-end justify-between">
              <View>
                <Text className="text-red-500 font-black" style={{ fontSize: 72, letterSpacing: -3, lineHeight: 72 }}>74</Text>
                <Text className="text-gray-500 text-xs uppercase tracking-widest mt-2" style={{ fontFamily: 'Courier New' }}>High Risk — Day 3 of Detox</Text>
              </View>
              <View className="items-end" style={{ gap: 6 }}>
                <View style={{ backgroundColor: 'rgba(255,59,59,0.15)', borderRadius: 8, padding: 8 }}>
                  <Text className="text-red-400 text-xs" style={{ fontFamily: 'Courier New' }}>↓ 12 pts</Text>
                </View>
                <Text className="text-gray-600 text-xs" style={{ fontFamily: 'Courier New' }}>vs last week</Text>
              </View>
            </View>

            {/* Score bar */}
            <View className="mt-4" style={{ height: 4, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
              <View style={{ width: '74%', height: '100%', backgroundColor: '#ff3b3b', borderRadius: 2 }} />
            </View>
            <View className="flex-row justify-between mt-1">
              <Text className="text-gray-600 text-xs" style={{ fontFamily: 'Courier New' }}>0</Text>
              <Text className="text-gray-600 text-xs" style={{ fontFamily: 'Courier New' }}>100</Text>
            </View>
          </View>

          {/* Streak */}
          <View className="rounded-2xl p-5 mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
            <SectionLabel text="Weekly Streak" />
            <View className="flex-row justify-between">
              {DAYS.map((d, i) => (
                <View key={i} className="items-center" style={{ gap: 6 }}>
                  <View style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: i < 4 ? '#ff3b3b' : 'rgba(255,255,255,0.05)', alignItems: 'center', justifyContent: 'center' }}>
                    {i < 4 && <Text style={{ fontSize: 14 }}>✓</Text>}
                  </View>
                  <Text className="text-gray-600 text-xs" style={{ fontFamily: 'Courier New' }}>{d}</Text>
                </View>
              ))}
            </View>
            <View className="mt-4 pt-4" style={{ borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.05)' }}>
              <Text className="text-white text-sm font-bold">4 day streak 🔥</Text>
              <Text className="text-gray-500 text-xs mt-1" style={{ fontFamily: 'Courier New' }}>You saved 6.2 hours this week</Text>
            </View>
          </View>

          {/* Today's Usage */}
          <View className="rounded-2xl p-5 mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
            <SectionLabel text="Today's Usage" />
            <View style={{ gap: 16 }}>
              {APPS.map((app, i) => (
                <View key={i}>
                  <View className="flex-row justify-between mb-2">
                    <Text className="text-white text-sm font-bold">{app.name}</Text>
                    <Text className="text-gray-400 text-sm" style={{ fontFamily: 'Courier New' }}>{app.time}</Text>
                  </View>
                  <View style={{ height: 4, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                    <View style={{ width: `${app.pct}%`, height: '100%', backgroundColor: app.color, borderRadius: 2 }} />
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Focus Lock CTA */}
          <TouchableOpacity
            className="rounded-2xl py-5 items-center"
            style={{ backgroundColor: '#ff3b3b', shadowColor: '#ff3b3b', shadowOpacity: 0.3, shadowRadius: 16, elevation: 6 }}
            onPress={() => router.push('/(tabs)/focus')}
          >
            <Text className="text-white font-bold tracking-widest text-sm" style={{ fontFamily: 'Courier New' }}>🔒 ACTIVATE FOCUS LOCK</Text>
            <Text className="text-red-200 text-xs mt-1" style={{ fontFamily: 'Courier New' }}>Block all apps — you decide for how long</Text>
          </TouchableOpacity>

          {/* AI Insight */}
          <View className="rounded-2xl p-5 mt-4" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
            <SectionLabel text="AI Insight" />
            <Text className="text-white text-sm leading-relaxed">
              Your TikTok usage peaks between <Text className="text-red-400 font-bold">10pm–12am</Text>. Consider activating Sleep Guard before 9:30pm tonight.
            </Text>
            <TouchableOpacity className="mt-3">
              <Text className="text-red-500 text-xs tracking-widest uppercase" style={{ fontFamily: 'Courier New' }}>View full report →</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

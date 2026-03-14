import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const PERIODS = ['Day', 'Week', 'Month'];

const WEEKLY_DATA = [
  { day: 'Mon', hours: 3.2 },
  { day: 'Tue', hours: 2.8 },
  { day: 'Wed', hours: 4.1 },
  { day: 'Thu', hours: 1.9 },
  { day: 'Fri', hours: 2.5 },
  { day: 'Sat', hours: 3.8 },
  { day: 'Sun', hours: 1.4 },
];

const APP_BREAKDOWN = [
  { name: 'TikTok', hours: '8h 20m', pct: 42, color: '#ff3b3b' },
  { name: 'Instagram', hours: '5h 15m', pct: 26, color: '#ff8c00' },
  { name: 'Twitter', hours: '3h 40m', pct: 18, color: '#ffcc00' },
  { name: 'YouTube', hours: '2h 50m', pct: 14, color: '#ff6b6b' },
];

const MAX_HOURS = Math.max(...WEEKLY_DATA.map(d => d.hours));

function SectionLabel({ text }: { text: string }) {
  return (
    <View className="flex-row items-center mb-4" style={{ gap: 10 }}>
      <View style={{ width: 24, height: 1, backgroundColor: '#ff3b3b' }} />
      <Text className="text-red-500 text-xs tracking-widest uppercase" style={{ fontFamily: 'Courier New' }}>{text}</Text>
    </View>
  );
}

export default function Analytics() {
  const [period, setPeriod] = useState('Week');

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-4 pb-10">

          {/* Header */}
          <View className="mb-6">
            <Text className="text-gray-500 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Courier New' }}>Your patterns</Text>
            <Text className="text-white font-black text-2xl" style={{ letterSpacing: -1 }}>Analytics</Text>
          </View>

          {/* Period selector */}
          <View className="flex-row rounded-xl p-1 mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.04)', gap: 4 }}>
            {PERIODS.map(p => (
              <TouchableOpacity
                key={p}
                onPress={() => setPeriod(p)}
                className="flex-1 py-2 rounded-lg items-center"
                style={{ backgroundColor: period === p ? '#ff3b3b' : 'transparent' }}
              >
                <Text style={{ fontFamily: 'Courier New', fontSize: 12, color: period === p ? '#fff' : '#555', letterSpacing: 1 }}>{p.toUpperCase()}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Summary stats */}
          <View className="flex-row gap-3 mb-4">
            {[
              { label: 'Total time', value: '19.7h' },
              { label: 'Daily avg', value: '2.8h' },
              { label: 'Saved', value: '6.2h' },
            ].map((s, i) => (
              <View key={i} className="flex-1 rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
                <Text className="text-white font-black text-xl" style={{ letterSpacing: -1 }}>{s.value}</Text>
                <Text className="text-gray-500 text-xs mt-1 uppercase tracking-widest" style={{ fontFamily: 'Courier New' }}>{s.label}</Text>
              </View>
            ))}
          </View>

          {/* Bar chart */}
          <View className="rounded-2xl p-5 mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
            <SectionLabel text="Daily Usage" />
            <View className="flex-row items-end justify-between" style={{ height: 120, gap: 8 }}>
              {WEEKLY_DATA.map((d, i) => (
                <View key={i} className="flex-1 items-center" style={{ gap: 6 }}>
                  <Text className="text-gray-600 text-xs" style={{ fontFamily: 'Courier New' }}>{d.hours}h</Text>
                  <View style={{
                    flex: 1, width: '100%', justifyContent: 'flex-end',
                  }}>
                    <View style={{
                      width: '100%',
                      height: `${(d.hours / MAX_HOURS) * 100}%`,
                      backgroundColor: d.hours === MAX_HOURS ? '#ff3b3b' : 'rgba(255,59,59,0.3)',
                      borderRadius: 4,
                      minHeight: 8,
                    }} />
                  </View>
                  <Text className="text-gray-500 text-xs" style={{ fontFamily: 'Courier New' }}>{d.day}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* App breakdown */}
          <View className="rounded-2xl p-5 mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
            <SectionLabel text="App Breakdown" />
            <View style={{ gap: 16 }}>
              {APP_BREAKDOWN.map((app, i) => (
                <View key={i}>
                  <View className="flex-row justify-between mb-2">
                    <View className="flex-row items-center" style={{ gap: 8 }}>
                      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: app.color }} />
                      <Text className="text-white text-sm font-bold">{app.name}</Text>
                    </View>
                    <View className="flex-row items-center" style={{ gap: 8 }}>
                      <Text className="text-gray-400 text-sm" style={{ fontFamily: 'Courier New' }}>{app.hours}</Text>
                      <Text className="text-gray-600 text-xs" style={{ fontFamily: 'Courier New' }}>{app.pct}%</Text>
                    </View>
                  </View>
                  <View style={{ height: 4, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                    <View style={{ width: `${app.pct}%`, height: '100%', backgroundColor: app.color, borderRadius: 2 }} />
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Worst hours */}
          <View className="rounded-2xl p-5" style={{ backgroundColor: 'rgba(255,59,59,0.05)', borderWidth: 1, borderColor: 'rgba(255,59,59,0.15)' }}>
            <SectionLabel text="Your Weakest Hours" />
            <View style={{ gap: 10 }}>
              {[
                { time: '10pm – 12am', label: 'Late night scroll', risk: 'HIGH' },
                { time: '7am – 8am', label: 'Morning habit', risk: 'MEDIUM' },
                { time: '1pm – 2pm', label: 'Lunch break doom', risk: 'MEDIUM' },
              ].map((h, i) => (
                <View key={i} className="flex-row justify-between items-center py-3" style={{ borderBottomWidth: i < 2 ? 1 : 0, borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                  <View>
                    <Text className="text-white text-sm font-bold">{h.time}</Text>
                    <Text className="text-gray-500 text-xs mt-1" style={{ fontFamily: 'Courier New' }}>{h.label}</Text>
                  </View>
                  <View style={{ backgroundColor: h.risk === 'HIGH' ? 'rgba(255,59,59,0.15)' : 'rgba(255,140,0,0.15)', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}>
                    <Text style={{ fontFamily: 'Courier New', fontSize: 10, color: h.risk === 'HIGH' ? '#ff3b3b' : '#ff8c00', letterSpacing: 1 }}>{h.risk}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

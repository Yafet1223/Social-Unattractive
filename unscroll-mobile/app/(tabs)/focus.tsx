import { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DURATIONS = [
  { label: '25 min', value: 25, tag: 'POMODORO' },
  { label: '1 hour', value: 60, tag: 'FOCUSED' },
  { label: '2 hours', value: 120, tag: 'DEEP WORK' },
  { label: '4 hours', value: 240, tag: 'BEAST MODE' },
];

const BLOCKED_APPS = ['TikTok', 'Instagram', 'Twitter', 'YouTube', 'Snapchat', 'Reddit'];

function SectionLabel({ text }: { text: string }) {
  return (
    <View className="flex-row items-center mb-4" style={{ gap: 10 }}>
      <View style={{ width: 24, height: 1, backgroundColor: '#ff3b3b' }} />
      <Text className="text-red-500 text-xs tracking-widest uppercase" style={{ fontFamily: 'Courier New' }}>{text}</Text>
    </View>
  );
}

export default function Focus() {
  const [selected, setSelected] = useState(DURATIONS[1]);
  const [active, setActive] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (active && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining(r => {
          if (r <= 1) {
            clearInterval(intervalRef.current);
            setActive(false);
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [active]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const progress = active ? (remaining / (selected.value * 60)) : 0;

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-4 pb-10">

          {/* Header */}
          <View className="mb-8">
            <Text className="text-gray-500 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Courier New' }}>No distractions</Text>
            <Text className="text-white font-black text-2xl" style={{ letterSpacing: -1 }}>Focus Lock</Text>
          </View>

          {/* Timer / Activate */}
          <View className="rounded-2xl p-8 mb-4 items-center" style={{ backgroundColor: active ? 'rgba(255,59,59,0.06)' : 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: active ? 'rgba(255,59,59,0.3)' : 'rgba(255,255,255,0.06)' }}>
            {active ? (
              <>
                <Text className="text-gray-500 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Courier New' }}>Time Remaining</Text>
                <Text className="text-white font-black" style={{ fontSize: 64, letterSpacing: -3 }}>{formatTime(remaining)}</Text>
                <View className="w-full mt-4" style={{ height: 3, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                  <View style={{ width: `${(1 - progress) * 100}%`, height: '100%', backgroundColor: '#ff3b3b', borderRadius: 2 }} />
                </View>
                <Text className="text-gray-500 text-xs mt-3 uppercase tracking-widest" style={{ fontFamily: 'Courier New' }}>
                  🔒 {BLOCKED_APPS.length} apps blocked
                </Text>
              </>
            ) : (
              <>
                <Text className="text-gray-500 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'Courier New' }}>Selected Duration</Text>
                <Text className="text-white font-black text-5xl" style={{ letterSpacing: -2 }}>{selected.label}</Text>
                <View style={{ backgroundColor: 'rgba(255,59,59,0.1)', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 4, marginTop: 12, borderWidth: 1, borderColor: 'rgba(255,59,59,0.2)' }}>
                  <Text style={{ fontFamily: 'Courier New', fontSize: 10, color: '#ff3b3b', letterSpacing: 2 }}>{selected.tag}</Text>
                </View>
              </>
            )}
          </View>

          {/* Duration picker */}
          {!active && (
            <>
              <SectionLabel text="Choose Duration" />
              <View className="flex-row flex-wrap gap-3 mb-6">
                {DURATIONS.map((d) => (
                  <TouchableOpacity
                    key={d.value}
                    onPress={() => setSelected(d)}
                    className="rounded-xl px-5 py-4 items-center"
                    style={{
                      flex: 1, minWidth: '45%',
                      backgroundColor: selected.value === d.value ? 'rgba(255,59,59,0.1)' : 'rgba(255,255,255,0.02)',
                      borderWidth: 1,
                      borderColor: selected.value === d.value ? 'rgba(255,59,59,0.4)' : 'rgba(255,255,255,0.06)',
                    }}
                  >
                    <Text style={{ color: selected.value === d.value ? '#ff3b3b' : '#fff', fontFamily: 'Courier New', fontSize: 16, fontWeight: '700' }}>{d.label}</Text>
                    <Text style={{ fontFamily: 'Courier New', fontSize: 9, color: selected.value === d.value ? '#ff6b6b' : '#555', letterSpacing: 1, marginTop: 4 }}>{d.tag}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}

          {/* Blocked apps */}
          <View className="rounded-2xl p-5 mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
            <SectionLabel text="Apps to Block" />
            <View className="flex-row flex-wrap" style={{ gap: 8 }}>
              {BLOCKED_APPS.map((app) => (
                <View key={app} style={{ backgroundColor: 'rgba(255,59,59,0.08)', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: 'rgba(255,59,59,0.15)' }}>
                  <Text style={{ fontFamily: 'Courier New', fontSize: 11, color: '#ff6b6b' }}>{app}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Activate / Cancel */}
          <TouchableOpacity
            className="rounded-2xl py-5 items-center"
            style={{
              backgroundColor: active ? 'rgba(255,255,255,0.05)' : '#ff3b3b',
              borderWidth: active ? 1 : 0,
              borderColor: 'rgba(255,255,255,0.1)',
              shadowColor: active ? 'transparent' : '#ff3b3b',
              shadowOpacity: 0.35,
              shadowRadius: 16,
              elevation: active ? 0 : 6,
            }}
            onPress={() => {
              if (active) {
                setActive(false);
                clearInterval(intervalRef.current);
              } else {
                setRemaining(selected.value * 60);
                setActive(true);
              }
            }}
          >
            <Text style={{ fontFamily: 'Courier New', fontSize: 14, fontWeight: '700', color: active ? '#888' : '#fff', letterSpacing: 2 }}>
              {active ? 'CANCEL SESSION' : '🔒 ACTIVATE FOCUS LOCK'}
            </Text>
          </TouchableOpacity>

          {active && (
            <Text className="text-center text-gray-600 text-xs mt-3" style={{ fontFamily: 'Courier New' }}>
              Stay strong. You set this rule for a reason.
            </Text>
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

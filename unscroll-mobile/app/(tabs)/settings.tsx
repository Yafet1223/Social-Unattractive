import { Text, View, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

function SectionLabel({ text }: { text: string }) {
  return (
    <View className="flex-row items-center mb-4" style={{ gap: 10 }}>
      <View style={{ width: 24, height: 1, backgroundColor: '#ff3b3b' }} />
      <Text className="text-red-500 text-xs tracking-widest uppercase" style={{ fontFamily: 'Courier New' }}>{text}</Text>
    </View>
  );
}

function SettingRow({ label, desc, value, onToggle }: { label: string; desc?: string; value: boolean; onToggle: () => void }) {
  return (
    <View className="flex-row justify-between items-center py-4" style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)' }}>
      <View style={{ flex: 1, marginRight: 16 }}>
        <Text className="text-white text-sm font-bold">{label}</Text>
        {desc && <Text className="text-gray-500 text-xs mt-1" style={{ fontFamily: 'Courier New' }}>{desc}</Text>}
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#222', true: 'rgba(255,59,59,0.4)' }}
        thumbColor={value ? '#ff3b3b' : '#555'}
      />
    </View>
  );
}

function MenuRow({ label, desc, arrow = true }: { label: string; desc?: string; arrow?: boolean }) {
  return (
    <TouchableOpacity className="flex-row justify-between items-center py-4" style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)' }}>
      <View>
        <Text className="text-white text-sm font-bold">{label}</Text>
        {desc && <Text className="text-gray-500 text-xs mt-1" style={{ fontFamily: 'Courier New' }}>{desc}</Text>}
      </View>
      {arrow && <Text className="text-gray-600">→</Text>}
    </TouchableOpacity>
  );
}

export default function Settings() {
  const [settings, setSettings] = useState({
    sleepGuard: true,
    intentionCheck: true,
    dopamineDetox: false,
    dailyReport: true,
    weeklyInsight: true,
    breakingNotif: false,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(s => ({ ...s, [key]: !s[key] }));
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-4 pb-10">

          {/* Header */}
          <View className="mb-8">
            <Text className="text-gray-500 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Courier New' }}>Your account</Text>
            <Text className="text-white font-black text-2xl" style={{ letterSpacing: -1 }}>Settings</Text>
          </View>

          {/* Profile card */}
          <View className="rounded-2xl p-5 mb-6 flex-row items-center" style={{ backgroundColor: 'rgba(255,59,59,0.06)', borderWidth: 1, borderColor: 'rgba(255,59,59,0.2)', gap: 16 }}>
            <View style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: '#ff3b3b', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'Courier New', fontWeight: '700', fontSize: 18, color: '#fff' }}>Y</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text className="text-white font-bold text-base">Yafet</Text>
              <Text className="text-gray-400 text-xs mt-1" style={{ fontFamily: 'Courier New' }}>Day 3 of detox — keep going 🔥</Text>
            </View>
            <View style={{ backgroundColor: 'rgba(255,59,59,0.15)', borderRadius: 8, padding: 8 }}>
              <Text style={{ fontFamily: 'Courier New', fontSize: 10, color: '#ff3b3b' }}>PRO</Text>
            </View>
          </View>

          {/* Features */}
          <View className="rounded-2xl px-5 mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
            <View className="pt-5">
              <SectionLabel text="Features" />
            </View>
            <SettingRow label="Sleep Guard" desc="Block apps 90 min before bedtime" value={settings.sleepGuard} onToggle={() => toggle('sleepGuard')} />
            <SettingRow label="Intention Check" desc="Pause before opening social apps" value={settings.intentionCheck} onToggle={() => toggle('intentionCheck')} />
            <SettingRow label="Dopamine Detox Mode" desc="Grayscale + hide likes on all apps" value={settings.dopamineDetox} onToggle={() => toggle('dopamineDetox')} />
          </View>

          {/* Notifications */}
          <View className="rounded-2xl px-5 mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
            <View className="pt-5">
              <SectionLabel text="Notifications" />
            </View>
            <SettingRow label="Daily Summary" desc="End of day usage report" value={settings.dailyReport} onToggle={() => toggle('dailyReport')} />
            <SettingRow label="Weekly AI Insight" desc="Personalized pattern report" value={settings.weeklyInsight} onToggle={() => toggle('weeklyInsight')} />
            <SettingRow label="Limit Warnings" desc="Alert when approaching daily limit" value={settings.breakingNotif} onToggle={() => toggle('breakingNotif')} />
          </View>

          {/* Account */}
          <View className="rounded-2xl px-5 mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
            <View className="pt-5">
              <SectionLabel text="Account" />
            </View>
            <MenuRow label="Manage Subscription" desc="Pro plan — $7/month" />
            <MenuRow label="App Limits" desc="Set daily limits per app" />
            <MenuRow label="Bedtime Schedule" desc="10:30pm — 7:00am" />
            <MenuRow label="Export My Data" desc="Download your usage history" />
          </View>

          {/* Danger zone */}
          <View className="rounded-2xl px-5 mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
            <View className="pt-5">
              <SectionLabel text="More" />
            </View>
            <MenuRow label="Privacy Policy" />
            <MenuRow label="Terms of Service" />
            <MenuRow label="Contact Support" />
          </View>

          {/* Sign out */}
          <TouchableOpacity className="rounded-2xl py-4 items-center" style={{ borderWidth: 1, borderColor: 'rgba(255,59,59,0.2)', backgroundColor: 'rgba(255,59,59,0.05)' }}>
            <Text style={{ fontFamily: 'Courier New', fontSize: 13, color: '#ff3b3b', letterSpacing: 2 }}>SIGN OUT</Text>
          </TouchableOpacity>

          <Text className="text-center text-gray-700 text-xs mt-6" style={{ fontFamily: 'Courier New' }}>
            UNSCROLL v1.0.0 — TAKE BACK YOUR TIME
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

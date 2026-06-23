import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const STEPS = [
  {
    tag: "WAKE UP",
    title: "Stop the\nEndless\nScroll.",
    desc: "You didn't choose to be addicted. The algorithm was designed to hook you. We help you fight back.",
    stat: "2.7h",
    statLabel: "lost every single day",
  },
  {
    tag: "THE PROBLEM",
    title: "You lose 40\ndays a year\nto scrolling.",
    desc: "That's 40 full days every year. Gone. To ads, drama, and content designed to keep you hooked.",
    stat: "86%",
    statLabel: "feel worse after scrolling",
  },
  {
    tag: "THE SOLUTION",
    title: "AI that fights\nthe algorithm\nfor you.",
    desc: "Hard limits, dopamine detox, intention checks and AI coaching. Built to actually work.",
    stat: "4x",
    statLabel: "more productive users report",
  },
  {
    tag: "GET STARTED",
    title: "Take back\ncontrol.\nStarting now.",
    desc: "Join 50,000+ people who chose their time over the algorithm. Your detox starts today.",
    stat: "50k+",
    statLabel: "people reclaimed their time",
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar style="light" />

      {/* Skip */}
      <View className="flex-row justify-end px-6 pt-2">
        <TouchableOpacity onPress={() => router.replace('/') }>
          <Text className="text-gray-500 text-xs tracking-widest" style={{ fontFamily: 'Courier New' }}>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-6 justify-between pb-10">

        {/* Top */}
        <View className="mt-8">
          <View className="flex-row items-center mb-6" style={{ gap: 12 }}>
            <View className="w-8 h-px bg-red-500" />
            <Text className="text-red-500 text-xs tracking-widest" style={{ fontFamily: 'Courier New' }}>{current.tag}</Text>
          </View>
          <Text className="text-white font-black leading-tight mb-6" style={{ fontSize: 44, letterSpacing: -2 }}>
            {current.title}
          </Text>
          <Text className="text-gray-400 text-base leading-relaxed">{current.desc}</Text>
        </View>

        {/* Stat card */}
        <View className="rounded-2xl p-6" style={{ backgroundColor: 'rgba(255,59,59,0.05)', borderWidth: 1, borderColor: 'rgba(255,59,59,0.2)' }}>
          <Text className="text-red-500 font-black" style={{ fontSize: 56, letterSpacing: -2 }}>{current.stat}</Text>
          <Text className="text-gray-500 text-xs mt-1 tracking-widest uppercase" style={{ fontFamily: 'Courier New' }}>{current.statLabel}</Text>
        </View>

        {/* Bottom */}
        <View>
          {/* Step dots */}
          <View className="flex-row mb-8" style={{ gap: 8 }}>
            {STEPS.map((_, i) => (
              <View key={i} style={{ height: 3, borderRadius: 2, width: i === step ? 32 : 16, backgroundColor: i === step ? '#ff3b3b' : '#333' }} />
            ))}
          </View>

          {/* CTA */}
          <TouchableOpacity
            className="rounded-2xl py-5 items-center"
            style={{ backgroundColor: '#ff3b3b', shadowColor: '#ff3b3b', shadowOpacity: 0.35, shadowRadius: 20, elevation: 8 }}
            onPress={() => isLast ? router.replace('/') : setStep(step + 1)}
          >
            <Text className="text-white font-bold tracking-widest" style={{ fontFamily: 'Courier New', fontSize: 14 }}>
              {isLast ? 'GET STARTED →' : 'NEXT →'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

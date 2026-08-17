---
name: expo-react-native-architect
description: Universal Mobile & Cross-Platform Architecture Skill. Builds iOS, Android, and Web applications using Expo Router v4, native gestures, haptics, bottom sheets, and push notification pipelines.
tags: [expo, react-native, mobile, ios, android, expo-router, cross-platform]
author: Yogeshkumar Patel (@shahrukh-hack)
---

# 📱 Expo & Universal React Native Architecture Skill

> **Purpose**: Build fluid, native-feeling cross-platform mobile apps for iOS, Android, and Web with file-based routing and native gestures.

---

## ⚡ 1. File-Based Routing with Expo Router v4

```tsx
// app/(tabs)/index.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push('/details');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vibe Superkit Mobile</Text>
      <Text style={styles.subtitle}>Universal React Native with Expo Router</Text>

      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.button,
          { transform: [{ scale: pressed ? 0.96 : 1 }] },
        ]}
      >
        <Text style={styles.buttonText}>Explore Features</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0A2540',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#4F566B',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#635BFF',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
```

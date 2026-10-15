import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function App() {
    const [taps, setTaps] = useState(0);
    return (
        <Pressable style={styles.root} onPress={() => setTaps(t => t + 1)}>
            <Text style={styles.text}>Taps: {taps}</Text>
            <Text>App freezes on tap 18 (pool size 17, one identifier leaked per tap)</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    root: { alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: 'white' },
    text: { fontSize: 48 },
});
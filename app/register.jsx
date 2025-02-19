import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput style={styles.input} placeholder="First Name" />
            <TextInput style={styles.input} placeholder="Last Name" />
            <TextInput style={styles.input} placeholder="User Name" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" />
            <TextInput style={styles.input} placeholder="Phone Number" />
            <TextInput style={styles.input} placeholder="Identification" />

            <Text style={styles.text2}>
                I have an account? <Link href="/index.jsx" style={styles.text3}>Sign in</Link>
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}> Register </Text>
                <Link href="/login.jsx" style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}></Link>
            </TouchableOpacity>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    text2: {
        marginTop: 40,
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    text3: {
        fontSize: 17,
        color: '#3CC8C7',
    },
    input: {
        height: 60,
        width: 300,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 18,
        marginTop: 20,
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#3CC8C7',
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;

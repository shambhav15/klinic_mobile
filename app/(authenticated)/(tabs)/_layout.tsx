import { ImageComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen

                name="home"
                options={{
                    
                    headerStyle: { backgroundColor: Colors.dark },
                    title: '',
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    // header: () => <CustomHeader />,
                    headerTransparent: true,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="person-circle-outline" size={size} color={color} />
                    ),
                    // header: () => <CustomHeader />,
                    headerTransparent: true,
                }}
            />
            <Tabs.Screen
                name="message"
                options={{
                    title: 'Message',
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="chatbox" size={size} color={color} />
                    ),
                    // header: () => <CustomHeader />,
                    headerTransparent: true,
                }}
            />
            <Tabs.Screen
                name="payment"
                options={{
                    title: 'Payment',
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="cash-outline" size={size} color={color} />
                    ),
                    // header: () => <CustomHeader />,
                    headerTransparent: true,
                }}
            />
        </Tabs>
    )
}

export default Layout

const styles = StyleSheet.create({})
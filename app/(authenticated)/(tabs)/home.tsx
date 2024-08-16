import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Bell, User, Pill, Ambulance, Siren } from 'lucide-react-native';
import { useAssets } from 'expo-asset';

const HomePage = () => {
    const [assets] = useAssets([
        require("@/assets/images/me.jpeg"),
        require("@/assets/images/bg.jpg"),
    ]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View>
                    <View style={styles.header}>
                        <Image
                            source={{ uri: assets ? assets[0].uri : undefined }}
                            style={styles.avatar}
                        />
                        <View style={styles.welcomeContainer}>
                            <Text style={styles.welcomeText}>Welcome!</Text>
                            <Text style={styles.nameText}>Shambhav</Text>
                        </View>
                        <TouchableOpacity style={styles.bellIcon}>
                            <Bell color="#000" size={24} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.greetingText}>Have a nice day 😊</Text>

                    <TouchableOpacity style={styles.urgentCareButton}>
                        <Siren strokeWidth={2} color="#fdfdfd" size={24} />
                        <Text style={styles.urgentCareText}>Urgent Care</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.sectionTitle}>Ecare Services</Text>

                <View style={styles.servicesContainer}>
                    <TouchableOpacity style={styles.serviceItem}>
                        <User color="#007AFF" size={24} />
                        <Text style={styles.serviceText}>Consultation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.serviceItem}>
                        <Pill color="#007AFF" size={24} />
                        <Text style={styles.serviceText}>Medicines</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.serviceItem}>
                        <Ambulance color="#007AFF" size={24} />
                        <Text style={styles.serviceText}>Ambulance</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.appointmentSection}>
                    <Text style={styles.sectionTitle}>My Appointment</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>See All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scroll}>
                    <View style={styles.appointmentCard}>
                        <View style={styles.appointmentInfo}>
                            <Text style={styles.appointmentDate}>Wed Jun 20 • 8:00 - 8:30 AM</Text>
                            <View style={styles.doctorInfo}>
                                <Image
                                    source={{ uri: assets ? assets[0].uri : undefined }}
                                    style={styles.doctorAvatar}
                                />
                                <View>
                                    <Text style={styles.doctorName}>dr. Nirmala Azalea</Text>
                                    <Text style={styles.doctorSpecialty}>Orthopedic</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.appointmentCard}>
                        <View style={styles.appointmentInfo}>
                            <Text style={styles.appointmentDate}>Wed Jun 20 • 8:00 - 8:30 AM</Text>
                            <View style={styles.doctorInfo}>
                                <Image
                                    source={{ uri: assets ? assets[0].uri : undefined }}
                                    style={styles.doctorAvatar}
                                />
                                <View>
                                    <Text style={styles.doctorName}>dr. Nirmala Azalea</Text>
                                    <Text style={styles.doctorSpecialty}>Orthopedic</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.appointmentCard}>
                        <View style={styles.appointmentInfo}>
                            <Text style={styles.appointmentDate}>Wed Jun 20 • 8:00 - 8:30 AM</Text>
                            <View style={styles.doctorInfo}>
                                <Image
                                    source={{ uri: assets ? assets[0].uri : undefined }}
                                    style={styles.doctorAvatar}
                                />
                                <View>
                                    <Text style={styles.doctorName}>dr. Nirmala Azalea</Text>
                                    <Text style={styles.doctorSpecialty}>Orthopedic</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scroll: {
        maxHeight: 300,
        borderRadius: 12,
        backgroundColor: 'white',
        padding: 10,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
    contentContainer: {
        padding: 20,
        paddingTop: 40, // Added extra padding at the top
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    welcomeContainer: {
        marginLeft: 15,
        flex: 1,
    },
    welcomeText: {
        fontSize: 16,
        color: '#666',
    },
    nameText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    bellIcon: {
        padding: 10,
    },
    greetingText: {
        fontSize: 18,
        marginBottom: 25,
        color: '#333',
    },
    urgentCareButton: {
        backgroundColor: '#ea352c',
        padding: 18,
        borderRadius: 30,
        flex: 1,
        width: '50%',
        flexDirection: 'row',
        gap: 10,
        fontWeight: '300',
        alignItems: 'center',
        marginBottom: 30,
    },
    urgentCareText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    servicesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    serviceItem: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 12,
        width: '30%',
    },
    serviceText: {
        marginTop: 10,
        fontSize: 14,
        color: '#333',
    },
    appointmentSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    seeAllText: {
        color: '#007AFF',
        fontSize: 16,
    },
    appointmentCard: {
        textShadowColor: '#000',

        marginBottom: 5,
        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    appointmentInfo: {
        marginLeft: 10,
    },
    appointmentDate: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    doctorInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    doctorAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    doctorName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    doctorSpecialty: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
});

export default HomePage;
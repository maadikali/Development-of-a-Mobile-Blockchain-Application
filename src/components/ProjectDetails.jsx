import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const ProjectDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text style={{ fontSize: 20 }}>ProjectDetails for id: {id}</Text>
        </View>
    );
}

export default ProjectDetails;

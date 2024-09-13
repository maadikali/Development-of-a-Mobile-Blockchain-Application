import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';

export const defaultProjectImage = 'https://mobilaser.kz/wp-content/uploads/2022/02/the-untitled-ventures-2.jpg';

const ProjectListItem = ({ project }) => {
    return (
        <Link href={`../startup/${project.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    source={{ uri: project.image || defaultProjectImage }}
                    style={styles.image}
                    resizeMode='cover'
                />
                <Text style={styles.title}>{project.name}</Text>
                <Text style={styles.goal}>${project.goal}</Text>
            </Pressable>
        </Link>
    );
};

export default ProjectListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        flex: 1,
        maxWidth: '50%',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
    },
    goal: {
        color: Colors.light.tint,
        fontWeight: '700',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
});

import { FlatList, View } from 'react-native';
import projects from '@assets/data/projects';
import ProjectListItem from '@components/ProjectListItem';

export default function MenuScreen() {
    return (
        <View>
            <FlatList
                data={projects}
                renderItem={({ item }) => <ProjectListItem project={item} />}
                numColumns={2}
                contentContainerStyle={{ gap: 10, padding: 10 }}
                columnWrapperStyle={{ gap: 10 }}
            />
        </View>
    );
}

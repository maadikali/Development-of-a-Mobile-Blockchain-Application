import '@walletconnect/react-native-compat';
import { WagmiConfig } from 'wagmi';
import { sepolia } from 'viem/chains';
import { createWeb3Modal, defaultWagmiConfig, Web3Modal, W3mButton } from '@web3modal/wagmi-react-native';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '87f1d17369dc69480330b59edb852665';

// 2. Create config
const metadata = {
    name: 'Web3Modal RN diploma app',
    description: 'Web3Modal RN crowdfunding diploma app',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
    redirect: {
        native: 'YOUR_APP_SCHEME://',
        universal: 'YOUR_APP_UNIVERSAL_LINK.com',
    },
};

const chains = [sepolia];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
    projectId,
    chains,
    wagmiConfig,
    enableAnalytics: true,
    // Optional - defaults to your Cloud configuration
});

export default function TabOneScreen() {
    return (
        <WagmiConfig config={wagmiConfig}>
            <View style={styles.container}>
                <Text style={styles.title}>Tab One</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <EditScreenInfo path="app/(tabs)/index.tsx" />
                <W3mButton />
            </View>
            <Web3Modal />
        </WagmiConfig>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

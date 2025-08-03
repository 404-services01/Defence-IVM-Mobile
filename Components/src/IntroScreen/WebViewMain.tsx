import { useEffect, useState } from "react";
import { ActivityIndicator, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";
import * as Network from "expo-network";

interface IWebMainProps {
    navigation?: any;
}

const WebViewMain = ({
    navigation
}: IWebMainProps) => {

    const [isConnected, setIsConnected] = useState<any>(null);

    useEffect(() => {
        const checkConnection = async () => {
            const status = await Network.getNetworkStateAsync();
            setIsConnected(status.isInternetReachable);
        };

        checkConnection();

        const interval = setInterval(checkConnection, 5000);
        return () => clearInterval(interval);
    }, []);

    if (isConnected === null) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size={"large"} color={"#000"} />
                <Text>Checking network status...</Text>
            </View>
        );
    }

    if (!isConnected) {
        return (
            <View style={styles.centered}>
                <Text style={styles.offlineText}>You're offline</Text>
                <Text>Please connect to the internet to view the content</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <WebView
            source={{uri: 'https://divm.srv864894.hstgr.cloud/'}}
            startInLoadingState={true}
            style={styles.webview}
            />
        </View>
    )
}

export default WebViewMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1
    },
    centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  offlineText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
})
import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Profile({ navigation }) {
  const githubUsername = navigation.getParam('github_username');
  return <WebView style={styles.page} source={{ uri: `https://github.com/${githubUsername}` }} />;
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});

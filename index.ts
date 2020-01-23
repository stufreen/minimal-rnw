import { AppRegistry } from 'react-native-web';
import App from './src/App'

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('react-root') });
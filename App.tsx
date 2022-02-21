import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import HomePage from './src/pages/HomePage';

export default function App() {
  return (
    <SafeAreaProvider>
      <StyledSafeAreaView>
        <HomePage />
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
}

const StyledSafeAreaView = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  position: relative;
`;
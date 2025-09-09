import { store } from 'app/store';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'shared/ui';

interface ProvidersProps {
  children: React.ReactNode;
}
export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <ErrorBoundary fallback={<div>An error has occurred</div>}>
        {children}
      </ErrorBoundary>
    </Provider>
  );
}

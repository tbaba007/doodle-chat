import { Suspense, lazy } from 'react';
import './App.css';
const Chat=lazy(()=>import('./Pages/Chat'));
const Loading =lazy(()=>import('./Components/ui/Loading'))
document.title="Doddle Chat"
function App() {
  return (
    <Suspense fallback={<Loading/>}>
    <Chat/>
    </Suspense>
  );
}

export default App;
import './App.css';
import TodoCardUI from './components/TodoCardUI';
import WelcomeUI from './components/WelcomeUI';

function App() {
  return (
    <div className='grid place-items-center pt-28 '>
      <TodoCardUI />
    </div>
  );
}

export default App;
// className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '
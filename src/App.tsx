import './App.css';
import {MuiModel} from './components/mui/mui-model';
import {AppProviders} from './providers/app-providers';
import {Users} from './components/users/users';

function App() {
    return (
        <AppProviders>
            <div className='App'>
                {/* <MuiModel /> */}
                <Users />
            </div>
        </AppProviders>
    );
}

export default App;

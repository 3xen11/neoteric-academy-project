//IMPORTS COMPONENTS
import UserSigninForm from './Pages/SigninRegisterPages/UserSigninForm';
import UserRegisterForm from './Pages/SigninRegisterPages/UserRegisterForm';
import EmployerSigninForm from './Pages/SigninRegisterPages/EmployerSignin';
import MainPage from './Pages/MainPage';

import { Route, Switch } from "react-router-dom";



const App: React.FC = (): JSX.Element => {

  return (
    <div>
      {/* http://localhost:3000/ */}

    <Switch>
      <Route path='/' exact={true}>
        <MainPage />
      </Route>

      <Route path='/user-signin'>
        <UserSigninForm />
      </Route>

      <Route path='/user-register'>
        <UserRegisterForm />
      </Route>

      <Route path='/employer-signin'>
        <EmployerSigninForm />
      </Route>
    </Switch>
      
      
    </div>
  )
}

export default App;

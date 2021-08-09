//IMPORTS COMPONENTS
import UserSigninForm from './views/UserSigninForm/UserSigninForm';
import UserRegisterForm from './views/UserRegisterForm/UserRegisterForm';
import EmployerSigninForm from './views/EmployerSigninForm/EmployerSigninForm';
import MainPage from './views/MainPage/MainPage';
import WorkOffer from './views/WorkOffer/WorkOffer';


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

        <Route path='/offer'>
          <WorkOffer />
        </Route>
      </Switch>


    </div>
  )
}

export default App;

//IMPORTS COMPONENTS
import UserSigninForm from './Pages/SigninRegisterPages/UserSigninForm';
import UserRegisterForm from './Pages/SigninRegisterPages/UserRegisterForm';
import EmployerSigninForm from './Pages/SigninRegisterPages/EmployerSignin';





const App: React.FC = (): JSX.Element => {

  return (
    <div>
      <UserSigninForm />
      <UserRegisterForm />
      <EmployerSigninForm />
    </div>
  )
}

export default App;

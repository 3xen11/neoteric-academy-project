//IMPORTS COMPONENTS
import UserSigninForm from './Pages/SigninRegisterPages/UserSigninForm';
import UserRegisterForm from './Pages/SigninRegisterPages/UserRegisterForm';
import EmployerSigninForm from './Pages/SigninRegisterPages/EmployerSignin';
import MainPage from './Pages/MainPage';




const App: React.FC = (): JSX.Element => {

  return (
    <div>
      {/* <UserSigninForm />
      <UserRegisterForm />
      <EmployerSigninForm /> */}
      <MainPage />
    </div>
  )
}

export default App;

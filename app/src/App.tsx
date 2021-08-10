//IMPORTS COMPONENTS
import UserSigninForm from './views/UserSigninForm/UserSigninForm';
import UserRegisterForm from './views/UserRegisterForm/UserRegisterForm';
import EmployerSigninForm from './views/EmployerSigninForm/EmployerSigninForm';
import MainPage from './views/MainPage/MainPage';
import WorkOffer from './views/WorkOffer/WorkOffer';

// import MockData from '../public/Data/data.json'

import { Route, Switch } from "react-router-dom";



const App: React.FC = (): JSX.Element => {


  let state = {
    offers: [{
      "id": 1,
      "title": "Junior JavaScript Developer",
      "salary": "5000 - 9000 pln",
      "techStack": ["JavaScript", "React", "CSS3", "HTML", "GraphQL", "Vue.js"],
      "remote": "Partly Remote",
      "offerStatus": "new",
      "description": "opis_stanowiska",
      "photo": "link_do_zdjęcia"
    },
    {
      "id": 2,
      "title": "AWS Architect",
      "salary": "17000 - 25000 pln",
      "techStack": ["AWS"],
      "remote": "Fully Remote",
      "offerStatus": "new",
      "description": "opis_stanowiska",
      "photo": "link_do_zdjęcia"
    },
    {
      "id": 3,
      "title": "Scrum Master",
      "salary": "15000 - 20000 pln",
      "techStack": ["Scrum", "Scrum Master", "English"],
      "remote": "Fully Remote",
      "offerStatus": "new",
      "description": "opis_stanowiska",
      "photo": "link_do_zdjęcia"
    }, {
      "id": 4,
      "title": "Junior JavaScript Developer",
      "salary": "5000 - 9000 pln",
      "techStack": ["JavaScript", "React", "CSS3", "HTML", "GraphQL", "Vue.js"],
      "remote": "Partly Remote",
      "offerStatus": "new",
      "description": "opis_stanowiska",
      "photo": "link_do_zdjęcia"
    },
    {
      "id": 5,
      "title": "AWS Architect",
      "salary": "17000 - 25000 pln",
      "techStack": ["AWS"],
      "remote": "Fully Remote",
      "offerStatus": "new",
      "description": "opis_stanowiska",
      "photo": "link_do_zdjęcia"
    },
    {
      "id": 6,
      "title": "Scrum Master",
      "salary": "15000 - 20000 pln",
      "techStack": ["Scrum", "Scrum Master", "English"],
      "remote": "Fully Remote",
      "offerStatus": "new",
      "description": "opis_stanowiska",
      "photo": "link_do_zdjęcia"
    }]
  }





  return (
    <div>
      {/* http://localhost:3000/ */}

      <Switch>
        <Route path='/' exact={true}>
          <MainPage
            offers={state.offers} />
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

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
        "key": 1,
        "company": "Fingoweb",
        "address": {
            "city": "Kraków",
            "street": "Ostatnia 1C/A10"
        },
        "employees": "35+",
        "logo": "https://image.flaticon.com/icons/png/512/5149/5149020.png",
        "coordinates": "nie_mam_pojęica_co_tu_dać",
        "offers": [{
            "key": 1,
            "title": "Junior JavaScript Developer",
            "salary": "5000 - 9000 pln",
            "techStack": ["JavaScript", "React", "CSS3", "HTML", "GraphQL", "Vue.js"],
            "remote": "Partly Remote",
            "offerStatus": "new",
            "description": "opis_stanowiska",
            "photo": "link_do_zdjęcia"
        }]
    },
    {
        "key": 2,
        "company": "BlueSoft",
        "address": {
            "city": "Warszawa",
            "street": "Al. Jerozolimskie 96"
        },
        "employees": "650+",
        "logo": "https://image.flaticon.com/icons/png/512/5149/5149075.png",
        "coordinates": "nie_mam_pojęica_co_tu_dać",
        "offers": [{
                "key": 1,
                "title": "AWS Architect",
                "salary": "17000 - 25000 pln",
                "techStack": ["AWS", "English"],
                "remote": "Fully Remote",
                "offerStatus": "new",
                "description": "opis_stanowiska",
                "photo": "link_do_zdjęcia"
            },
            {
                "key": 2,
                "title": "Scrum Master",
                "salary": "15000 - 20000 pln",
                "techStack": ["Scrum", "Scrum Master", "English"],
                "remote": "Fully Remote",
                "offerStatus": "new",
                "description": "opis_stanowiska",
                "photo": "link_do_zdjęcia"
            }
        ]
    },{
      "key": 1,
      "company": "Fingoweb",
      "address": {
          "city": "Kraków",
          "street": "Ostatnia 1C/A10"
      },
      "employees": "35+",
      "logo": "https://image.flaticon.com/icons/png/512/5149/5149020.png",
      "coordinates": "nie_mam_pojęica_co_tu_dać",
      "offers": [{
          "key": 1,
          "title": "Junior JavaScript Developer",
          "salary": "5000 - 9000 pln",
          "techStack": ["JavaScript", "React", "CSS3", "HTML", "GraphQL", "Vue.js"],
          "remote": "Partly Remote",
          "offerStatus": "new",
          "description": "opis_stanowiska",
          "photo": "link_do_zdjęcia"
      }]
  },
  {
      "key": 2,
      "company": "BlueSoft",
      "address": {
          "city": "Warszawa",
          "street": "Al. Jerozolimskie 96"
      },
      "employees": "650+",
      "logo": "https://image.flaticon.com/icons/png/512/5149/5149075.png",
      "coordinates": "nie_mam_pojęica_co_tu_dać",
      "offers": [{
              "key": 1,
              "title": "AWS Architect",
              "salary": "17000 - 25000 pln",
              "techStack": ["AWS", "English"],
              "remote": "Fully Remote",
              "offerStatus": "new",
              "description": "opis_stanowiska",
              "photo": "link_do_zdjęcia"
          },
          {
              "key": 2,
              "title": "Scrum Master",
              "salary": "15000 - 20000 pln",
              "techStack": ["Scrum", "Scrum Master", "English"],
              "remote": "Fully Remote",
              "offerStatus": "new",
              "description": "opis_stanowiska",
              "photo": "link_do_zdjęcia"
          }
      ]
  },{
    "key": 1,
    "company": "Fingoweb",
    "address": {
        "city": "Kraków",
        "street": "Ostatnia 1C/A10"
    },
    "employees": "35+",
    "logo": "https://image.flaticon.com/icons/png/512/5149/5149020.png",
    "coordinates": "nie_mam_pojęica_co_tu_dać",
    "offers": [{
        "key": 1,
        "title": "Junior JavaScript Developer",
        "salary": "5000 - 9000 pln",
        "techStack": ["JavaScript", "React", "CSS3", "HTML", "GraphQL", "Vue.js"],
        "remote": "Partly Remote",
        "offerStatus": "new",
        "description": "opis_stanowiska",
        "photo": "link_do_zdjęcia"
    }]
},
{
    "key": 2,
    "company": "BlueSoft",
    "address": {
        "city": "Warszawa",
        "street": "Al. Jerozolimskie 96"
    },
    "employees": "650+",
    "logo": "https://image.flaticon.com/icons/png/512/5149/5149075.png",
    "coordinates": "nie_mam_pojęica_co_tu_dać",
    "offers": [{
            "key": 1,
            "title": "AWS Architect",
            "salary": "17000 - 25000 pln",
            "techStack": ["AWS", "English"],
            "remote": "Fully Remote",
            "offerStatus": "new",
            "description": "opis_stanowiska",
            "photo": "link_do_zdjęcia"
        },
        {
            "key": 2,
            "title": "Scrum Master",
            "salary": "15000 - 20000 pln",
            "techStack": ["Scrum", "Scrum Master", "English"],
            "remote": "Fully Remote",
            "offerStatus": "new",
            "description": "opis_stanowiska",
            "photo": "link_do_zdjęcia"
        }
    ]
}
]
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

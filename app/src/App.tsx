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
      "company": "DevsData LLC",
      "address": {
        "city": "Warszawa",
        "street": "Aleje Jerozolimskie"
      },
      "companySize": "40",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943325.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/devsdata-llc-data-engineer",
        "title": "Data Engineer (REMOTE)",
        "lowestPrice": "32 000",
        "highestPrice": "38 000",
        "currency": "PLN",
        "payment": "net/month",
        "agreement": "B2B",
        "techStack": ["SQL", "Python", "C++", "AWS"],
        "remote": "Fully Remote",
        "offerStatus": "New",
        "description": "... We are looking for a Data Engineer for an algorithmic trading and asset management company headquartered in Singapore, with technology development offices in Singapore and Amsterdam, to play a lead role in how to gather and digest data. You’ll work closely with co-founders to source and analyse data to enable the company to systematically improve the decision-making process and utilize data to drive new business decisions. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Senior"
      }]
    },
    {
      "key": 2,
      "company": "VSTORM",
      "address": {
        "city": "Wrocław",
        "street": "Robotnicza"
      },
      "companySize": "10-20",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943310.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/vstorm-microsoft-sharepoint-dynamic",
        "title": "Microsoft (SharePoint/Dynamic CRM/.NET)",
        "lowestPrice": "10 000",
        "highestPrice": "20 000",
        "currency": "PLN",
        "payment": "net/month",
        "agreement": "B2B",
        "techStack": [".NET C#", "Powershell", "SQL"],
        "remote": "Fully Remote",
        "offerStatus": "New",
        "description": "... VSTORM is a top Polish application & AI development company. We are a company with a remote-first culture and community-building approach. We work with clients from world-known Enterprises, SMBs to startups from the USA, the UK, Western Europe. At VSTORM you will find people who love their jobs, enjoy their lives, do what they promise, build partnerships based on trust, and support. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Mid"
      }]
    },
    {
      "key": 3,
      "company": "Softax",
      "address": {
        "city": "Warszawa",
        "street": "Aleja Stanów Zjednoczonych 61"
      },
      "companySize": "100",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943290.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/softax-junior-frontend-developer",
        "title": "Junior Frontend Developer",
        "lowestPrice": "5 600",
        "highestPrice": "10 0000",
        "currency": "PLN",
        "payment": "gross/month",
        "agreement": "permanent",
        "techStack": ["HTML5", "CSS3", "ReactJS", "XML", "Python", "Unix",],
        "remote": "Office",
        "offerStatus": "New",
        "description": "... W Softaxie dołączysz do jednego z zespołów programistycznych. Twoja praca będzie polegać na rozwoju i utrzymaniu istniejących systemów lub tworzeniu nowych produktów dla naszych klientów. Idealnym kandydatem jest student lub absolwent kierunków technicznych (preferowana informatyka) z komercyjnym doświadczeniem, lecz nie zamykamy się całkowicie - najważniejsze dla nas są chęć rozwoju i nauki. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Junior"
      }]
    },
    {
      "key": 1,
      "company": "DevsData LLC",
      "address": {
        "city": "Warszawa",
        "street": "Aleje Jerozolimskie"
      },
      "companySize": "40",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943325.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/devsdata-llc-data-engineer",
        "title": "Data Engineer (REMOTE)",
        "lowestPrice": "32 000",
        "highestPrice": "38 000",
        "currency": "PLN",
        "payment": "net/month",
        "agreement": "B2B",
        "techStack": ["SQL", "Python", "C++", "AWS"],
        "remote": "Fully Remote",
        "offerStatus": "New",
        "description": "... We are looking for a Data Engineer for an algorithmic trading and asset management company headquartered in Singapore, with technology development offices in Singapore and Amsterdam, to play a lead role in how to gather and digest data. You’ll work closely with co-founders to source and analyse data to enable the company to systematically improve the decision-making process and utilize data to drive new business decisions. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Senior"
      }]
    },
    {
      "key": 2,
      "company": "VSTORM",
      "address": {
        "city": "Wrocław",
        "street": "Robotnicza"
      },
      "companySize": "10-20",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943310.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/vstorm-microsoft-sharepoint-dynamic",
        "title": "Microsoft (SharePoint/Dynamic CRM/.NET)",
        "lowestPrice": "10 000",
        "highestPrice": "20 000",
        "currency": "PLN",
        "payment": "net/month",
        "agreement": "B2B",
        "techStack": [".NET C#", "Powershell", "SQL"],
        "remote": "Fully Remote",
        "offerStatus": "New",
        "description": "... VSTORM is a top Polish application & AI development company. We are a company with a remote-first culture and community-building approach. We work with clients from world-known Enterprises, SMBs to startups from the USA, the UK, Western Europe. At VSTORM you will find people who love their jobs, enjoy their lives, do what they promise, build partnerships based on trust, and support. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Mid"
      }]
    },
    {
      "key": 3,
      "company": "Softax",
      "address": {
        "city": "Warszawa",
        "street": "Aleja Stanów Zjednoczonych 61"
      },
      "companySize": "100",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943290.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/softax-junior-frontend-developer",
        "title": "Junior Frontend Developer",
        "lowestPrice": "5 600",
        "highestPrice": "10 0000",
        "currency": "PLN",
        "payment": "gross/month",
        "agreement": "permanent",
        "techStack": ["HTML5", "CSS3", "ReactJS", "XML", "Python", "Unix",],
        "remote": "Office",
        "offerStatus": "New",
        "description": "... W Softaxie dołączysz do jednego z zespołów programistycznych. Twoja praca będzie polegać na rozwoju i utrzymaniu istniejących systemów lub tworzeniu nowych produktów dla naszych klientów. Idealnym kandydatem jest student lub absolwent kierunków technicznych (preferowana informatyka) z komercyjnym doświadczeniem, lecz nie zamykamy się całkowicie - najważniejsze dla nas są chęć rozwoju i nauki. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Junior"
      }]
    },
    {
      "key": 1,
      "company": "DevsData LLC",
      "address": {
        "city": "Warszawa",
        "street": "Aleje Jerozolimskie"
      },
      "companySize": "40",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943325.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/devsdata-llc-data-engineer",
        "title": "Data Engineer (REMOTE)",
        "lowestPrice": "32 000",
        "highestPrice": "38 000",
        "currency": "PLN",
        "payment": "net/month",
        "agreement": "B2B",
        "techStack": ["SQL", "Python", "C++", "AWS"],
        "remote": "Fully Remote",
        "offerStatus": "New",
        "description": "... We are looking for a Data Engineer for an algorithmic trading and asset management company headquartered in Singapore, with technology development offices in Singapore and Amsterdam, to play a lead role in how to gather and digest data. You’ll work closely with co-founders to source and analyse data to enable the company to systematically improve the decision-making process and utilize data to drive new business decisions. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Senior"
      }]
    },
    {
      "key": 2,
      "company": "VSTORM",
      "address": {
        "city": "Wrocław",
        "street": "Robotnicza"
      },
      "companySize": "10-20",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943310.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/vstorm-microsoft-sharepoint-dynamic",
        "title": "Microsoft (SharePoint/Dynamic CRM/.NET)",
        "lowestPrice": "10 000",
        "highestPrice": "20 000",
        "currency": "PLN",
        "payment": "net/month",
        "agreement": "B2B",
        "techStack": [".NET C#", "Powershell", "SQL"],
        "remote": "Fully Remote",
        "offerStatus": "New",
        "description": "... VSTORM is a top Polish application & AI development company. We are a company with a remote-first culture and community-building approach. We work with clients from world-known Enterprises, SMBs to startups from the USA, the UK, Western Europe. At VSTORM you will find people who love their jobs, enjoy their lives, do what they promise, build partnerships based on trust, and support. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Mid"
      }]
    },
    {
      "key": 3,
      "company": "Softax",
      "address": {
        "city": "Warszawa",
        "street": "Aleja Stanów Zjednoczonych 61"
      },
      "companySize": "100",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943290.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/softax-junior-frontend-developer",
        "title": "Junior Frontend Developer",
        "lowestPrice": "5 600",
        "highestPrice": "10 0000",
        "currency": "PLN",
        "payment": "gross/month",
        "agreement": "permanent",
        "techStack": ["HTML5", "CSS3", "ReactJS", "XML", "Python", "Unix",],
        "remote": "Office",
        "offerStatus": "New",
        "description": "... W Softaxie dołączysz do jednego z zespołów programistycznych. Twoja praca będzie polegać na rozwoju i utrzymaniu istniejących systemów lub tworzeniu nowych produktów dla naszych klientów. Idealnym kandydatem jest student lub absolwent kierunków technicznych (preferowana informatyka) z komercyjnym doświadczeniem, lecz nie zamykamy się całkowicie - najważniejsze dla nas są chęć rozwoju i nauki. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Junior"
      }]
    },
    {
      "key": 1,
      "company": "DevsData LLC",
      "address": {
        "city": "Warszawa",
        "street": "Aleje Jerozolimskie"
      },
      "companySize": "40",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943325.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/devsdata-llc-data-engineer",
        "title": "Data Engineer (REMOTE)",
        "lowestPrice": "32 000",
        "highestPrice": "38 000",
        "currency": "PLN",
        "payment": "net/month",
        "agreement": "B2B",
        "techStack": ["SQL", "Python", "C++", "AWS"],
        "remote": "Fully Remote",
        "offerStatus": "New",
        "description": "... We are looking for a Data Engineer for an algorithmic trading and asset management company headquartered in Singapore, with technology development offices in Singapore and Amsterdam, to play a lead role in how to gather and digest data. You’ll work closely with co-founders to source and analyse data to enable the company to systematically improve the decision-making process and utilize data to drive new business decisions. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Senior"
      }]
    },
    {
      "key": 2,
      "company": "VSTORM",
      "address": {
        "city": "Wrocław",
        "street": "Robotnicza"
      },
      "companySize": "10-20",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943310.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/vstorm-microsoft-sharepoint-dynamic",
        "title": "Microsoft (SharePoint/Dynamic CRM/.NET)",
        "lowestPrice": "10 000",
        "highestPrice": "20 000",
        "currency": "PLN",
        "payment": "net/month",
        "agreement": "B2B",
        "techStack": [".NET C#", "Powershell", "SQL"],
        "remote": "Fully Remote",
        "offerStatus": "New",
        "description": "... VSTORM is a top Polish application & AI development company. We are a company with a remote-first culture and community-building approach. We work with clients from world-known Enterprises, SMBs to startups from the USA, the UK, Western Europe. At VSTORM you will find people who love their jobs, enjoy their lives, do what they promise, build partnerships based on trust, and support. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Mid"
      }]
    },
    {
      "key": 3,
      "company": "Softax",
      "address": {
        "city": "Warszawa",
        "street": "Aleja Stanów Zjednoczonych 61"
      },
      "companySize": "100",
      "logo": "https://image.flaticon.com/icons/png/512/4943/4943290.png",
      "coordinates": "koordynaty",
      "offers": [{
        "id": 1,
        "link": "/offer/softax-junior-frontend-developer",
        "title": "Junior Frontend Developer",
        "lowestPrice": "5 600",
        "highestPrice": "10 0000",
        "currency": "PLN",
        "payment": "gross/month",
        "agreement": "permanent",
        "techStack": ["HTML5", "CSS3", "ReactJS", "XML", "Python", "Unix",],
        "remote": "Office",
        "offerStatus": "New",
        "description": "... W Softaxie dołączysz do jednego z zespołów programistycznych. Twoja praca będzie polegać na rozwoju i utrzymaniu istniejących systemów lub tworzeniu nowych produktów dla naszych klientów. Idealnym kandydatem jest student lub absolwent kierunków technicznych (preferowana informatyka) z komercyjnym doświadczeniem, lecz nie zamykamy się całkowicie - najważniejsze dla nas są chęć rozwoju i nauki. ...",
        "photo": "link_do_zdjęcia",
        "expirience": "Junior"
      }]
    },]
  }


  return (
    <div>
      {/* http://localhost:3000/ */}

      < Switch >
        <Route path='/' exact={true}>
          <MainPage
            templateOffer={state.offers} />
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

        <WorkOffer
          offers={state.offers} />

      </ Switch >


    </div >
  )
}

export default App;

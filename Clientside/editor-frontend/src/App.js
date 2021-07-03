import './App.css';
import NavBar from './components/navBar/navBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InsertConference from './components/Conferences/insertConference';
import ViewAllConferences from './components/Conferences/viewAllConferences';
import UploadRPTemplate from './components/researchPaperTemplates/uploadRPTemplates';
import ViewAllRPTemplates from './components/researchPaperTemplates/viewAllRPTemplates';
import UploadPTTemplate from './components/presentationTemplates/uploadPTTemplates';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <section>
          <Switch>
            <Route path="/all-conferences" component={ViewAllConferences} />
            <Route path="/insert-conference" component={InsertConference} />
            <Route path="/" exact/>
            <Route path="/insert-rp-templates" component={UploadRPTemplate} />
            <Route path="/all-rp-download-templates" component={ViewAllRPTemplates} />
            <Route path="/insert-pt-templates" component={UploadPTTemplate} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;

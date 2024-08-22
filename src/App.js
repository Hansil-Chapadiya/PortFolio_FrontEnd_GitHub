import './App.css';
import { useRef } from 'react';
import Header from './MyComponents/Header';
import Introduction from './MyComponents/Introduction';
import PersonalInfo from './MyComponents/PersonalInfo';
import Projects from './MyComponents/Projects';
import PostsSlider from './MyComponents/PostsSlider';
import Hobbies from './MyComponents/Hobbies';
import Contacts from './MyComponents/Contacts'
import Footer from './MyComponents/Footer';

function App() {

  const projectsRef = useRef(null);
  const PostsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPosts = () => {
    if (PostsRef.current) {
      PostsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='App'>
      <Header scrollToProjects={scrollToProjects} scrollToPosts={scrollToPosts} />
      <Introduction />
      <PersonalInfo />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={PostsRef}>
        <PostsSlider />
      </div>
      <Hobbies/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;

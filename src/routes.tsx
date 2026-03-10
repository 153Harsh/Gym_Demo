import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Membership from './pages/Membership';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import Trainers from './pages/Trainers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    name: 'Main Layout',
    path: '/',
    element: <MainLayout />,
    children: [
      {
        name: 'Home',
        path: '',
        element: <Home />
      },
      {
        name: 'About',
        path: 'about',
        element: <About />
      },
      {
        name: 'Services',
        path: 'services',
        element: <Services />
      },
      {
        name: 'Membership',
        path: 'membership',
        element: <Membership />
      },
      {
        name: 'Schedule',
        path: 'schedule',
        element: <Schedule />
      },
      {
        name: 'Gallery',
        path: 'gallery',
        element: <Gallery />
      },
      {
        name: 'Trainers',
        path: 'trainers',
        element: <Trainers />
      },
      {
        name: 'Blog',
        path: 'blog',
        element: <Blog />
      },
      {
        name: 'Contact',
        path: 'contact',
        element: <Contact />
      },
      {
        name: 'Not Found',
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default routes;

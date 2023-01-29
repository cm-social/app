import {
  FunctionComponent
} from 'react'
import {
  homeOutline, homeSharp,
  bicycleOutline, bicycleSharp
} from 'ionicons/icons';
import HomePage from '../pages/HomePage';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  component?: FunctionComponent
}
  
  
export const appPages : AppPage[] = [
  {
    title: 'Startseite',
    url: '/startseite',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    component: HomePage
  },
  {
    title: 'Touren',
    url: '/touren',
    iosIcon: bicycleOutline,
    mdIcon: bicycleSharp
  },
];

export default appPages;
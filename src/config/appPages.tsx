import {
  homeOutline, homeSharp
} from 'ionicons/icons';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}
  
  
export const appPages : AppPage[] = [
  {
    title: 'Startseite',
    url: '/page/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
];

export default appPages;
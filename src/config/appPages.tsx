import {
  FunctionComponent
} from 'react'
import {
  homeOutline, homeSharp,
  bicycleOutline, bicycleSharp,
  mapOutline, mapSharp,
  chatbubblesOutline, chatbubblesSharp,
  newspaperOutline, newspaperSharp,
  informationCircleOutline, informationCircleSharp,
  personCircleOutline, personCircleSharp,
  shareOutline, shareSharp,
  settingsOutline, settingsSharp,
  documentTextOutline, documentTextSharp
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
  {
    title: 'Karte',
    url: '/karte',
    iosIcon: mapOutline,
    mdIcon: mapSharp
  },
  {
    title: 'Chat',
    url: '/chat',
    iosIcon: chatbubblesOutline,
    mdIcon: chatbubblesSharp
  },
  {
    title: 'Aktuelles',
    url: '/aktuelles',
    iosIcon: newspaperOutline,
    mdIcon: newspaperSharp
  },
  {
    title: 'Tipps',
    url: '/tipps',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp
  },
  {
    title: 'Profil',
    url: '/profil',
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp
  },
  {
    title: 'Teilen',
    url: '/teilen',
    iosIcon: shareOutline,
    mdIcon: shareSharp
  },
  {
    title: 'Einstellungen',
    url: '/einstellungen',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp
  },
  {
    title: 'Impressum',
    url: '/impressum',
    iosIcon: documentTextOutline,
    mdIcon: documentTextSharp
  }
];

export default appPages;
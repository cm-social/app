import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {

  const name = "Seite nicht gefunden";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>Der gesuchte Inhalt wurde nicht gefunden.</div>
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;

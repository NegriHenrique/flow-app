import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonThumbnail, IonRow, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import React from 'react';
import './Home.css';
import Logo from '../../assets/Logo-cortada.png';
import { FiInfo, FiSettings, FiPlay } from 'react-icons/fi';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonRow className="ion-justify-content-around ion-align-items-start ion-padding-top">
                        <FiInfo size="35" color="#fff"/>
                        <IonImg src={Logo} className="ion-margin-vertical" style={{width: '50%'}}></IonImg>
                        <FiSettings size="35" color="#fff" />
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonHeader className="ion-no-border ion-padding-start">
                <IonToolbar>
                    <IonTitle size="large">Confira a lista de episódios</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    <IonItem className="card aovivo ion-margin" color="tertiary">
                        <IonThumbnail slot="start" >
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding texto">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                            <p className="aovivo">ao vivo</p>
                        </IonLabel>
                        <FiPlay size="30" color="#fff"/>
                    </IonItem>
                    
                    <IonItem className="card ion-margin" color="dark">
                        <IonThumbnail slot="start" >
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding texto">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <FiPlay size="30" color="#fff" />
                    </IonItem>
                    <IonItem className="card ion-margin" color="dark">
                        <IonThumbnail slot="start" >
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding texto">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <FiPlay size="30" color="#fff" />
                    </IonItem>
                    <IonItem className="card ion-margin" color="dark">
                        <IonThumbnail slot="start" >
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding texto">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <FiPlay size="30" color="#fff" />
                    </IonItem>
                    <IonItem className="card ion-margin" color="dark">
                        <IonThumbnail slot="start" >
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding texto">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <FiPlay size="30" color="#fff" />
                    </IonItem>
                    <IonItem className="card ion-margin" color="dark">
                        <IonThumbnail slot="start" >
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding texto">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <FiPlay size="30" color="#fff" />
                    </IonItem>


                </IonList>
            </IonContent>
        </IonPage>
  );
}

export default Home;
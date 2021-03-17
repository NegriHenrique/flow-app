import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonThumbnail, IonRow, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../../components/ExploreContainer';
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
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay size="30" color="#fff"/></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay /></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay /></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay /></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay /></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay /></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay /></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay /></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay/></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay/></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay/></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#290</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay/></IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start" className="ion-margin-vertical">
                            <IonImg src={Logo}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-padding-horizontal">
                            <h2>Choice <span className="tag">#291</span></h2>
                            <p>Uma das maiores revelações do Rap Nacional, João Marcelo "Choice'' é um artista independente de 21 anos. Nascido no morro do ...</p>
                        </IonLabel>
                        <IonButton fill="outline" slot="end"><FiPlay/></IonButton>
                    </IonItem>

                </IonList>
            </IonContent>
        </IonPage>
  );
}

export default Home;
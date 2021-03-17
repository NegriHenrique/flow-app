import React from 'react';
import { IonHeader, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import Logo from '../../components/Logo/Logo'
import './DescriptionPage.css'

const DescriptionPage: React.FC = () => {
    return (
        <IonContent>
            <IonHeader>

                <IonRow className="ion-justify-content-center">
                    <Logo />
                </IonRow>

            </IonHeader>

            <IonGrid>
                <IonRow>
                    <IonCol size="3">
                        <h1>Xereca</h1>
                    </IonCol>
                    <IonCol size="9">
                        <h1>Xereca10</h1>

                    </IonCol>
                </IonRow>
            </IonGrid>


        </IonContent>
    );
}

export default DescriptionPage;
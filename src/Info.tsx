import React from 'react'
import styles from './Info.module.css'
import {
    Divider
} from 'antd'
const Info = props => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <h1>Keine Werbung, keine Kekse</h1>
                <Divider></Divider>
                <p>
                    Dies ist ein simpler Purin- und Harnsäurerechner für Gichtgeplagte wie mich. Die Daten sind aus verschiedenen Quellen zusammengetragen und ich
                    erhebe keinen Anspruch auf Vollständigkeit oder Korrektheit. 
                </p>
            </div>
        </React.Fragment>
    )
}

export default Info
import styles from './user_css.module.css'
import {UserAPI} from "@/components/Users/UsersAPI";

export default function Users() {

    return(
        <div className={styles.main_users_container}>
            <h3> Users Random </h3>
            <div id='content' className={styles.user_css_appi}>
                <div className={styles.card_container}>
                    <UserAPI/>
                    <UserAPI/>
                    <UserAPI/>
                    <UserAPI/>
                </div>
                <div className={styles.card_container}>
                    <UserAPI/>
                    <UserAPI/>
                    <UserAPI/>
                    <UserAPI/>
                </div>
                <div className={styles.card_container}>
                    <UserAPI/>
                    <UserAPI/>
                    <UserAPI/>
                    <UserAPI/>
                </div>
            </div>
        </div>
    )
}
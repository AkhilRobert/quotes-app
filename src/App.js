import styles from "./styles/app.module.css";
import QuoteScreen from "./components/QuoteScreen";

function App() {
    return (
        <div>
            <div className={styles.random}>
                <button className={styles.random__button}>
                    random <i className={"fa fa-sync-alt"} />
                </button>
            </div>
            <QuoteScreen
                text={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aspernatur omnis! Doloribus error mollitia pariatur porro quae, quam quidem similique vitae voluptate? Ab aut beatae nihil officiis velit? Accusamus ad blanditiis commodi doloribus eius, ex excepturi, labore libero maxime nam obcaecati, placeat quos rerum veniam vitae. Aliquid, inventore, necessitatibus."
                }
            />
        </div>
    );
}

export default App;

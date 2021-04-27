import styles from "../styles/home.module.css";
import QuoteScreen from "../components/QuoteScreen";
import AuthorButton from "../components/AuthorButton";

function Home() {
    return (
        <div>
            <div className={styles.random}>
                <button className={styles.random__button}>
                    random <i className={"fa fa-sync-alt"} />
                </button>
            </div>
            <div className={styles.centerWrapper}>
                <QuoteScreen
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aspernatur omnis! Doloribus error mollitia pariatur porro quae, quam quidem similique vitae voluptate? Ab aut beatae nihil officiis velit? Accusamus ad blanditiis commodi doloribus eius, ex excepturi, labore libero maxime nam obcaecati, placeat quos rerum veniam vitae. Aliquid, inventore, necessitatibus."
                    }
                />
                <AuthorButton author={"Bill Gates"} category={"Business"} />
            </div>
        </div>
    );
}

export default Home;

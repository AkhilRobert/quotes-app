import styles from "../styles/author_button.module.css";
import { Link } from "react-router-dom";

function AuthorButton(props) {
    return (
        <Link to={"/" + props.author} className={styles.authorButton}>
            <div className={styles.authorButton__wrapper}>
                <div>
                    <h3>{props.author}</h3>
                    <p>{props.category}</p>
                </div>
                <div className={styles.authorButton__rightSide}>
                    <i className="fas fa-arrow-right" />
                </div>
            </div>
        </Link>
    );
}

export default AuthorButton;

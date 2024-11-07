import styles from "./Header.module.css";

const BlogHeader = () => {
    return (
        <header className={styles.header}>
            <h1>CF Blog</h1>
            <nav>
            <a href="/blog">Inicio</a>
            <a href="#">Iniciar Sesion</a>
            </nav>
      </header>
    );
};

export default BlogHeader;
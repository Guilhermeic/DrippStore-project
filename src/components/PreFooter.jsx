import styles from "../components/PreFooter.module.css";

function PreFooter() {
    return (
        <>
            <section>
                <div className={styles.shoesElipse}>
                    <img className={styles.elipse} src="./src/assets/Ellipse.svg" alt="elipse" />
                    <img className={styles.laye} src="./src/assets/Laye.svg" alt="" />
                </div>

                <div className={styles.oferta}>
                    <p className={styles.offer}>Oferta especial</p>
                    <h1>Air Jordan edição de colecionador</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ullam id vel, quos necessitatibus repudiandae at mollitia corrupti sed accusamus ipsam nostrum iste molestias possimus quasi ab ipsa aperiam tempore.</p>
                    <input className={styles.button} type="submit" value="Ver Oferta" />
                </div>
            </section>
        </>
    );
}

export default PreFooter;


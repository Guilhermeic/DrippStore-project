import styles from "../components/PreFooter.module.css"
function PreFooter() {
    return (
        <>
            <section>
                <div className={styles.shoesElipse}>
                    <img className={styles.elipse} src="./src/assets/Ellipse.svg" alt="elipse" />
                    <img className={styles.laye} src="./src/assets/Laye.svg" alt="" />
                </div>

                <div className={styles.oferta}>
                    <p>Oferta especial</p>
                    <h1>Air Jordan edição de <br /> colecionador</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe ullam id vel, quos necessitatibus repudiandae at mollitia corrupti <br /> sed accusamus ipsam nostrum iste molestias possimus quasi ab ipsa aperiam tempore.</p>
               <input type="submit" name="Ver Oferta" id="" />
                </div>
            </section>
        </>
    )
}
export default PreFooter

import Logo from "./Logo";
function Header() {

    return (
        <>
            <header>

                <div>
                    <Logo />
                    <div className= {styles.navbar}>Pesquisar Produtos</div>
                    <div className={styles.register}>Cadastre-se</div>
                    <div className={styles.button}>Entrar</div>
                    <img src="./src/assets/Kart.svg" alt="" />

                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Produtos</li>
                        <li>Categorias</li>
                        <li>Meus Pedidos</li>
                    </ul>
                </nav>

            </header>
        </>
    )
}
export default Header



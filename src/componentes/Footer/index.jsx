import "./Footer.css"

const Footer = () =>{
    return <footer className='footer' style={{ backgroundImage: "url(/img/Footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/sebastian.romero.71653318'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/dietherromero/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Diether Romero</strong>
    </footer>
}

export default Footer
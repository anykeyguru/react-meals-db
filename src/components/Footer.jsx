function  Footer(){
    return (

        <footer className="page-footer  brown">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">React Meals</a>
                </div>
            </div>
        </footer>

    )
}

export {Footer}
export default function Layout(props){
    const { children } = props

    const header = (
        <header>
            <h1 className="text-medium text-gradient">
                Unalive
            </h1>
        </header>
    )

    const footer = (
        <footer>
            <small> Created by </small>
            <a target = "_blank" href = "https://github.com/ChristopherHsu07">
                <img alt = "pfp" src = "https://avatars.githubusercontent.com/u/157249611?v=4" />
                <p>@ChristopherHsu07</p>
                <i className="fa-brands fa-github"></i>
            </a>
        </footer>
    )

    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}
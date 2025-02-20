type HeroProps = {
    title: string;
    subtitle: string;
    type?: 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
}

export function Hero(props: HeroProps) {

    return (
        <section className={`hero is-${props.type}`}>
            <div className="hero-body">
                <p className="title">{props.title}</p>
                <p className="subtitle">{props.subtitle}</p>
            </div>
        </section>
    )
}
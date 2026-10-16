type StatProps = {
    title: string;
    value: string | number;
};

const Stat = ({title, value}: StatProps) => {
    return (
        <section className="stat-card">
            <h1>{title}</h1>
            <p>{value}</p>
        </section>
    );

}

export default Stat;

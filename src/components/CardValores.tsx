export type CardValoresProps = {
    title: string;
    value: string;
}

export const CardValores = ({ title, value }: CardValoresProps) => {
    return (
        <div className="card text-center border-success rounded-3 mb-3 " style={{ width: "18rem", }
        }>
            <div className="card-body ">

                <h5 className="card-title">{title}</h5>
                <hr />
                <p className="card-text">{value}</p>
            </div>
        </div >
    )
}

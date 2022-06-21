import "./Table.css"
const Table = () => {
    return <table className="table table--b">
        <thead className="table__head">
            <tr className="table__headRow">
                <th className="table__th">#</th>
                <th className="table__th">Tarea</th>
                <th className="table__th">Descripción</th>
                <th className="table__th">Encargado</th>
            </tr>
        </thead>

        <tbody>
            <tr className="table__row">
                <td className="table__td">1</td>
                <td className="table__td">Nombre de la primera tarea</td>
                <td className="table__td">Detalle de la primera tarea</td>
                <td className="table__td"><span className="table__inCharge">Miguel J Medina</span> <span className="badge">999+</span> </td>
            </tr>
            <tr className="table__row">
                <td className="table__td">2</td>
                <td className="table__td">Nombre de la segunda tarea</td>
                <td className="table__td">Detalle de la segunda tarea</td>
                <td className="table__td"><span className="table__inCharge">Miguel J Medina</span> <span className="badge">999+</span> </td>
            </tr>
            <tr className="table__row">
                <td className="table__td">3</td>
                <td className="table__td">Nombre de la tercera tarea</td>
                <td className="table__td">Detalle de la tercera tarea</td>
                <td className="table__td"><span className="table__inCharge">Miguel J Medina</span> <span className="badge">999+</span> </td>
            </tr>
            <tr className="table__row">
                <td className="table__td">4</td>
                <td className="table__td">Nombre de la cuarta tarea</td>
                <td className="table__td">Detalle de la cuarta tarea</td>
                <td className="table__td"><span className="table__inCharge">Miguel J Medina</span> <span className="badge">999+</span> </td>
            </tr>
            <tr className="table__row">
                <td className="table__td">5</td>
                <td className="table__td">Nombre de la quinta tarea</td>
                <td className="table__td">Detalle de la quinta tarea</td>
                <td className="table__td"><span className="table__inCharge">Miguel J Medina</span> <span className="badge">999+</span> </td>
            </tr>
        </tbody>
    </table>
}
export default Table
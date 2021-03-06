import React from 'react'

const ListPerson = props => {
    const data = props.Information.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.nombre}</td>
                <td>{row.apellido}</td>
                <td>
                    <button type="button" className="btn btn-info" onClick={() => props.UpdatePersonHandle(index)}>
                    <i className="fas fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={() => props.RemovePersonHandle(index)}>
                    <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {data}
            </tbody>
        </table>
    );
}

export default ListPerson
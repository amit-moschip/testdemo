function Table( {columns, data} ) {

    return(
        <>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        {columns.map((item, ColIndex) => {
                            <th key={ColIndex}>{item}</th>
                        })}
                    </tr>
                </thead>

                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td>
                                No data availble
                            </td>
                        </tr>
                    ) : (
                        data.map((row, RowIndex) => {
                        <tr key={RowIndex}>
                            {columns.map((col, colIndex) => {
                                <td key={colIndex}>{row[col]}</td>
                            })}
                        </tr>
                        })
                    )
                }
                </tbody>
            </table>
        </>
    )
}

export default Table;
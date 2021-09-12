function DataTable() {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Analu</td>
                        <td>25</td>
                        <td>10</td>
                        <td>15017.00</td>
                    </tr>
                     <tr>
                        <td>20/04/2021</td>
                        <td>Marcos</td>
                        <td>33</td>
                        <td>30</td>
                        <td>15017.00</td>
                    </tr>
                     <tr>
                        <td>19/04/2021</td>
                        <td>Luan</td>
                        <td>16</td>
                        <td>15</td>
                        <td>15017.00</td>
                    </tr>
                     <tr>
                        <td>18/04/2021</td>
                        <td>Vinicius</td>
                        <td>30</td>
                        <td>20</td>
                        <td>15017.00</td>
                    </tr>
                     <tr>
                        <td>17/04/2021</td>
                        <td>Ricardo</td>
                        <td>56</td>
                        <td>15</td>
                        <td>566325.00</td>
                    </tr>
                     <tr>
                        <td>16/04/2021</td>
                        <td>Felipe</td>
                        <td>50</td>
                        <td>143</td>
                        <td>573305.00</td>
                    </tr>
                     <tr>
                        <td>15/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>2500.00</td>
                    </tr>
                </tbody>
            </table>
        </div>



    );
}

export default DataTable;
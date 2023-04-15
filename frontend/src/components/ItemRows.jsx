import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemRows = ({ items, deleteItemRow, handleChangeItem }) => {

    return (
        items.map((data, index) => {
            const { item_name, item_rate, quantity, amount, item_status } = data;

            console.log(item_rate);
            return (
                <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td><input type="text" className='col-10' name="item_name" value={item_name}
                     onChange={(evnt) => handleChangeItem(index, evnt)} /></td>
                    <td><input type="number" className='col-8' name="item_rate" value={item_rate}
                     onChange={(evnt) => handleChangeItem(index, evnt)}/></td>
                    <td><input type="number" className='col-6'  name="quantity" value={quantity}
                     onChange={(evnt) => handleChangeItem(index, evnt)}/></td>
                    <td><input type="number" className='col-8' name="amount" value={amount} 
                      disabled/></td>
                    <td className='col-2'>
                        <Link to={""} className='btn btn-info btn-sm me-1' onClick={()=> deleteItemRow(index)}>
                            <FontAwesomeIcon icon="fas fa-edit" className='text-white' />
                        </Link>
                        <Link className='btn btn-success btn-sm me-1'>
                            <FontAwesomeIcon icon="fas fa-save" className='text-white' />
                        </Link>
                    </td>
                </tr>
            )
        })


    )

};


export default ItemRows;
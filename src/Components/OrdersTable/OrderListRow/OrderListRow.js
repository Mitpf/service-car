

import styles from '../OrdersTable.module.css'

export const OrderListRow = ({
    _id,
    userId,
    typeOrder,
    carInfo,
    toggleShowInfoPlus,
    showInfoPlus
}) => {
const categoriesOrder=Object.keys(typeOrder).filter(key=>typeOrder[key]);
    return (
        <tr id={_id} onClick={(e) => toggleShowInfoPlus(e)} className={styles["trbtn"]}>

            <td data-th="Service-Order No" >
                {_id}
            </td>
            <td data-th="Type service" >
                {categoriesOrder.join(', ')}
                
            </td>
            <td data-th="Owner car" >
                {userId}
            </td>
            <td data-th="Car model" >
                {carInfo.brandModel}

            </td>
            <td data-th="Calc Price" >
                na
            </td>
            <td data-th="Status" >
                working
            </td>

        </tr>
    );
};



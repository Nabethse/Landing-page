import './Grid.css';
import mysql from "../../data/mysql";





function Grid() {
    return (
        
        mysql.products.map (product => {
            return (
                <>
                    <img src={product.image} alt="" />
                    
                </>
            )
        }
    ))
}   

export default Grid;



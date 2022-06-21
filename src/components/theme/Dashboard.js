import "./Dashboard.css"
import CardBox from "../utils/CardBox"
import { faCartShopping, faCashRegister, faMoneyBill, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Table from "../utils/Table";
import Accordion from "../utils/Accordion";


const Dashboard = () => {
    return (
        <div className="wrapper">
            <div className="wrapper__container">
                <h1 className="wrapper__header"> Dashboard </h1>
                <div className="wrapper__info">
                    <div className="dashboard__column-4">
                        <CardBox color="france" icon={faMoneyBill} mount="$ 5,000" text="Utilidades" description="55% mas que el mes anterior" />
                        <CardBox color="amber" icon={faCashRegister} mount="$ 15,000" text="Ventas" description="80% aun en stock" />
                        <CardBox color="bermellon" icon={faCartShopping} mount="$ 10,000" text="Compras" description="55% mas que el mes anterior" />
                        <CardBox color="esmerald" icon={faUserPlus} mount="30%" text="Nuevos clientes" description="80% de clientes fidelizados" />
                    </div>
                    <div className="dashboard__column-2">
                        <Table />
                        <Accordion />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
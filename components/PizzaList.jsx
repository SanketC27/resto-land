import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
const PizzaList =({pizzaList}) => {

    return(
        <div className={styles.container}>

<h1 className={styles.title}>We see our customers as invited guests to a party,
 and we are the hosts. 
</h1>
<h1>All necessary steps are taken by us for food hygiene and customers saftey</h1>
      <p className={styles.desc}>
     We Have Amazing Variety Of Food 
      </p>
      <div className={styles.wrapper}>
          {pizzaList.map((pizza) =>(
          
          <PizzaCard  key={pizza._id} pizza={pizza}/>
          ))}
          
          
        


      </div>

        </div>
    )
}

export default PizzaList 
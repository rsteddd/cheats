import React from "react";
import styles from './Counter.module.scss'
import {useState} from "react";


const Counter = () => {
    const [count , setCount] = useState(0)
    const onDecrement = () => {
        setCount(count + 1)
    }
    const onIncrement = () => {
        setCount(count - 1)
    }
    const onReset = () => {
        setCount(0)
    }
    return(
        <>
            <div className={styles.Counter}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>Counter:</h2>
                    <h1 className={styles.h1}>{count}</h1>
                    <button onClick={onIncrement} className={`${styles.button} ${styles.minus}`}>Minus -</button>
                    <button onClick={onDecrement} className={`${styles.button} ${styles.plus}`}>Plus +</button>
                    <button onClick={onReset} className={`${styles.button} ${styles.reset}`}>Reset</button>
                </div>
            </div>
        </>
    )

}



export default Counter
import styles from './button.module.css'

export default function Button (props){

    const{color,children} = props

    return <div className={`${styles.button} ${styles[color]}`}>{children}</div>

}
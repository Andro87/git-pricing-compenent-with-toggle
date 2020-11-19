import styles from './box.module.css'

export default function Box (props){

    const{color,children} = props

    return <div className={`${styles.box} ${styles[color]}`}>{children}</div>

}
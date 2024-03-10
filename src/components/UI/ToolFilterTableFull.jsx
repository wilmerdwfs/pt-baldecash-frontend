import styles from './ToolFilterTableFull.module.css'
import FormsFactory from '../../factorys/formfilter/FormFilterTableFactory'

const ToolFilterTableFull = () => {
   return (
   	<div className={styles.tool_filter_table_full}>
         <div className={styles.colum1}>
            {FormsFactory.createSelectInput({ 
               label: 'Tipo de documento', 
               onChange:() => {},
               data: [
                  {id:1,text:'Tipo de coumento'},
                  {id:2,text:'Cedula de ciudadania'},
                  {id:3,text:'Targeta de identidad'}
               ]
            })}
         </div>
         <div className={styles.colum2}>
           {FormsFactory.createTextInput({ 
               label: 'Número de documento', 
               onChange:() => {}
            })}
         </div>
         <div className={styles.colum3}>
           {FormsFactory.createTextInput({ 
               label: 'Número de desembolso', 
               onChange:() => {}
            })}
         </div>
         <div className={styles.colum4}>
           {FormsFactory.createDateInput({ 
               label: 'Desde', 
               onChange:() => {}
            })}
         </div>
         <div className={styles.colum5}>
           {FormsFactory.createDateInput({ 
               label: 'Hasta', 
               onChange:() => {}
            })}
         </div>
      </div>
   )
}

export default ToolFilterTableFull;
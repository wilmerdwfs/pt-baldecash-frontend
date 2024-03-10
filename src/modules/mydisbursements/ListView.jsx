import {useState, useEffect} from 'react'
import useDatList from './useDatList'
import List from './List'
import PanelTop from '../../components/UI/PanelTop'
import PanelTopSimple from '../../components/UI/PanelTopSimple'
import ToolTop from '../../components/UI/ToolTop'
import ToolTopSimple from '../../components/UI/ToolTopSimple'
import ToolFilterTableFull from '../../components/UI/ToolFilterTableFull'

const ListView = () => {
    const {dtList} = useDatList();
    const [loading, setLoading] = useState(true);
         
    useEffect(() => {
        if (dtList.length === 0) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [dtList]);
    
    if (loading) {
        return <div>Cargando...</div>;
    }
   
    return (<>
        {!loading && <PanelTop><PanelTopSimple/></PanelTop>}
        {!loading && <ToolTop><ToolTopSimple title="Mis desembolsos" textButton="Descargar"/></ToolTop>}
        {!loading && <ToolFilterTableFull/>}
        {!loading && <List dtList={dtList}/>}
    </>);
}
export default ListView;
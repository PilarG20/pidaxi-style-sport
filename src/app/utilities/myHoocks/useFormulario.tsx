import { useState , ChangeEvent} from "react";

export const useFormulario = <T extends Object>(objInicial :T) => {
    const[objetito, setObjetito] = useState(objInicial);

    const dobleEnlace = ({target}:ChangeEvent<any>)  =>{
        const {name, value} = target;
        setObjetito({
            ...objetito,
            [name]:value
        })
    }
            
    return{
        objetito,
        dobleEnlace,
        ...objetito
    }            
    
};
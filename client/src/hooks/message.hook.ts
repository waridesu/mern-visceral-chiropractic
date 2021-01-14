import {useCallback} from 'react'

export const useMessage = () =>
    useCallback(text => {
        if(text){
            window.alert(text)
        }
    }, [])
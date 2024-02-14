import { PersistGate } from "redux-persist/integration/react";


export default function PersistGates( { children} : {children : React.ReactNode}){
    <PersistGate loading={null} persistor={persistor}>
        {children}
    </PersistGate>
}
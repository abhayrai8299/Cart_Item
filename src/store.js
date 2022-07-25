import { legacy_createStore as createStore} from 'redux'
import rootreducer from "./redux/reducers/main";



// function saveToLocalStorage(state) {
//      try {
//        const serialisedState = JSON.stringify(state);
//        localStorage.setItem("State", serialisedState);
 
//      } catch (e) {
//        console.warn(e);
//      }
//    }
//    function loadFromLocalStorage() {
//      try {
//        const serialisedState = localStorage.getItem("State");
//        if (serialisedState === null) return undefined;
//        return JSON.parse(serialisedState);
//      } catch (e) {
//        console.warn(e);
//        return undefined;
//      }
//    }
   const store = createStore(rootreducer);
   // store.subscribe(() => saveToLocalStorage(store.getState()));
   export default store;
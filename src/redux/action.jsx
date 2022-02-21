import { Set,
Sort_Asc, Sort_Dsc,
Sort_Date_Asc, Sort_Date_Dsc,
Sort_Explicit, Sort_Quality_Asc,
Sort_Quality_Dsc} from "./ActionTypes";

import axios from "axios";

    function Action(dispatch) {
        axios.get(`https://fast-reef-22226.herokuapp.com/data`).then((res) => {
            const users = res.data;
            console.log(users);
        })
        .catch(e => {
            const errorMessage = e.message;
        })
    }

export default Action;

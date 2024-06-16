import Cookies from "js-cookie";

function getCookie(name){
    return Cookies.get(name);
}

export default getCookie;
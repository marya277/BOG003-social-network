import { menu } from './lib/view/viewmenu.js';
import { home } from './lib/view/viewHome.js';
import { timeLine } from './lib/view/viewtimeline.js';
export const changeRoute = (hash) => {
    if ( hash === '#/'){
        return showTemplate (hash)
    }else if (hash === '#/timeline'){
        return showTemplate (hash)
    }else {
        return showTemplate (hash)  
    }
    }

const showTemplate (hash) => {
    const containerRoot= document.getElementById('root');
    containerRoot.innerHTML = menu ();
    switch (hash){
        case '#/':
            containerRoot.appendChild (home());
            break;
            case '#/timeline' :
                containerRoot.appendChild ( timeLime());
                break;
                default :
                containerRoot.innerHTML=`
                <p>NO EXISTE :(</p>`;
    }
}

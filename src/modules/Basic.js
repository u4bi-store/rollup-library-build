import '../scss/Basic.scss'
import { Util } from '../core/Util';

export class Basic{
    constructor(type){
        this._type = type;
        
        this.util = Util;

        this.init();

    }

    init(){
        console.log('basic init');
    };

    get type(){
        return this._type;
    }

    load(){
        return 'load '+this._type;
    }
}
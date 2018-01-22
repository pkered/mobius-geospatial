import {IdGenerator} from '../misc/GUID';
import {IPort} from './IPort';
import {InputPortTypes} from './InputPortTypes';
import {OutputPortTypes} from './OutputPortTypes';


export abstract class Port implements IPort{

	private _id: string;
	protected _type: InputPortTypes|OutputPortTypes;
	protected opts;

	private _selected: boolean = false;
	private _disabled: boolean = false;

	private _name: string;

	private _connected: boolean = false; 

	// values
	private _default: any = undefined;  
	private _computed: any = undefined;

	constructor(name: string){ 
		this._id =  IdGenerator.getId();
		this._name = name;
	}

	getId(): string{
		return this._id;
	}

	getType(): InputPortTypes|OutputPortTypes{
		return this._type;
	}

	setType(type: InputPortTypes|OutputPortTypes): void{
		this._type = type;
	}

	setOpts(opts: any): void{
		
	}

	getOpts(): void{
		throw Error("not defined");
	}

	isSelected(): boolean{
		return this._selected; 
	}

	isDisabled(): boolean{
		return this._disabled;
	}

	disable(): void{
		this._disabled = true;
	}

	enable(): void{
		this._disabled = false;
	}	
	
	//
	//
	//
	update(portData: IPort): void{
		this._id = portData["_id"];
		this._type = portData["_type"];
		this._selected = portData["_selected"];
		this._disabled = portData["_disabled"];
		this._connected = portData["_connected"];
		this._default = portData["_default"];
		this.opts = portData["opts"];
		// todo: assign computed also??
	}	


	//
	//
	//

	getName(): string{
		return this._name;
	}

	setName(name: string): void{
		this._name = name;
	}


	//
	//
	//
	isConnected(): boolean{
		return this._connected;
	}

	connect(): void{
		this._connected = true;
	}

	disconnect(): void{
		this._connected = false;
	}

	setDefaultValue(value: any): void{
		this._default = value;
	}

	setComputedValue(value: any): void{
		this._computed = value;
	}

	getDefaultValue(): any{
		return this._default;
	}

	getValue(): any{
		if (this._computed !== undefined)
			return this._computed;
		else
			return this._default;
	}

	//
	//
	//
	reset(): void{
		this._computed = undefined;
	}

}

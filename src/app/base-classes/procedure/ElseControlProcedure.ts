import {ProcedureTypes} from "./ProcedureTypes";
import {IComponent} from "./IComponent";
import {Procedure} from "./Procedure";
import {IProcedure} from "./IProcedure";

export class ElseControlProcedure extends Procedure{

	constructor(data?: {condition: string}){
		super(ProcedureTypes.ElseControl, true);

		if(data == undefined){
			data = {condition: "conditional_expression"}
		}

		let left: IComponent = { expression: undefined, 
								 isAction: false, 
								 module: undefined, 
								 category: undefined, 
								 fn_name: undefined,
								 params: undefined
								}
		let right: IComponent = {
							     expression: data.condition, 
								 isAction: false, 
								 module: undefined, 
								 category: undefined, 
								 fn_name: undefined,
								 params: undefined
								}
		super.setLeftComponent(left);
		super.setRightComponent(right);

	}

	update(prodData: any, parent: IProcedure): void{
		super.update(prodData, parent);

		this._leftComponent.expression = prodData._leftComponent.expression;
		this._rightComponent.expression = prodData._rightComponent.expression;
	}

}
namespace ProyectosZec.Nuevo_Roezec {
    export namespace ProcedimientosService {
        export const baseUrl = 'Nuevo_Roezec/Procedimientos';

        export declare function Create(request: Serenity.SaveRequest<ProcedimientosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcedimientosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcedimientosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcedimientosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Nuevo_Roezec/Procedimientos/Create",
            Update = "Nuevo_Roezec/Procedimientos/Update",
            Delete = "Nuevo_Roezec/Procedimientos/Delete",
            Retrieve = "Nuevo_Roezec/Procedimientos/Retrieve",
            List = "Nuevo_Roezec/Procedimientos/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ProcedimientosService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


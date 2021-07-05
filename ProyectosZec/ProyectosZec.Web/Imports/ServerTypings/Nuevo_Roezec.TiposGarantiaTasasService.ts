namespace ProyectosZec.Nuevo_Roezec {
    export namespace TiposGarantiaTasasService {
        export const baseUrl = 'Nuevo_Roezec/TiposGarantiaTasas';

        export declare function Create(request: Serenity.SaveRequest<TiposGarantiaTasasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TiposGarantiaTasasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposGarantiaTasasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposGarantiaTasasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Nuevo_Roezec/TiposGarantiaTasas/Create",
            Update = "Nuevo_Roezec/TiposGarantiaTasas/Update",
            Delete = "Nuevo_Roezec/TiposGarantiaTasas/Delete",
            Retrieve = "Nuevo_Roezec/TiposGarantiaTasas/Retrieve",
            List = "Nuevo_Roezec/TiposGarantiaTasas/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TiposGarantiaTasasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


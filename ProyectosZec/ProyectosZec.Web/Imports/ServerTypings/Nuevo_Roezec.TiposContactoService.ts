namespace ProyectosZec.Nuevo_Roezec {
    export namespace TiposContactoService {
        export const baseUrl = 'Nuevo_Roezec/TiposContacto';

        export declare function Create(request: Serenity.SaveRequest<TiposContactoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TiposContactoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposContactoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposContactoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Nuevo_Roezec/TiposContacto/Create",
            Update = "Nuevo_Roezec/TiposContacto/Update",
            Delete = "Nuevo_Roezec/TiposContacto/Delete",
            Retrieve = "Nuevo_Roezec/TiposContacto/Retrieve",
            List = "Nuevo_Roezec/TiposContacto/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TiposContactoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


namespace ProyectosZec.Nuevo_Roezec {
    export namespace EmpresasNaceService {
        export const baseUrl = 'Nuevo_Roezec/EmpresasNace';

        export declare function Create(request: Serenity.SaveRequest<EmpresasNaceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EmpresasNaceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmpresasNaceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmpresasNaceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Nuevo_Roezec/EmpresasNace/Create",
            Update = "Nuevo_Roezec/EmpresasNace/Update",
            Delete = "Nuevo_Roezec/EmpresasNace/Delete",
            Retrieve = "Nuevo_Roezec/EmpresasNace/Retrieve",
            List = "Nuevo_Roezec/EmpresasNace/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmpresasNaceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


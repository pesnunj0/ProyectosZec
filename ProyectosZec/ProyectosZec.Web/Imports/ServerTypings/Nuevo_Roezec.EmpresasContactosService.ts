namespace ProyectosZec.Nuevo_Roezec {
    export namespace EmpresasContactosService {
        export const baseUrl = 'Nuevo_Roezec/EmpresasContactos';

        export declare function Create(request: Serenity.SaveRequest<EmpresasContactosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EmpresasContactosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmpresasContactosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmpresasContactosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Nuevo_Roezec/EmpresasContactos/Create",
            Update = "Nuevo_Roezec/EmpresasContactos/Update",
            Delete = "Nuevo_Roezec/EmpresasContactos/Delete",
            Retrieve = "Nuevo_Roezec/EmpresasContactos/Retrieve",
            List = "Nuevo_Roezec/EmpresasContactos/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EmpresasContactosService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


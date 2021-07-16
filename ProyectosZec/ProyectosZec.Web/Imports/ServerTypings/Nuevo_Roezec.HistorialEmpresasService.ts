namespace ProyectosZec.Nuevo_Roezec {
    export namespace HistorialEmpresasService {
        export const baseUrl = 'Nuevo_Roezec/HistorialEmpresas';

        export declare function Create(request: Serenity.SaveRequest<HistorialEmpresasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<HistorialEmpresasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HistorialEmpresasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HistorialEmpresasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Nuevo_Roezec/HistorialEmpresas/Create",
            Update = "Nuevo_Roezec/HistorialEmpresas/Update",
            Delete = "Nuevo_Roezec/HistorialEmpresas/Delete",
            Retrieve = "Nuevo_Roezec/HistorialEmpresas/Retrieve",
            List = "Nuevo_Roezec/HistorialEmpresas/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>HistorialEmpresasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


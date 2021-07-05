namespace ProyectosZec.Nuevo_Roezec {
    export namespace EstadosEmpresaService {
        export const baseUrl = 'Nuevo_Roezec/EstadosEmpresa';

        export declare function Create(request: Serenity.SaveRequest<EstadosEmpresaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EstadosEmpresaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EstadosEmpresaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EstadosEmpresaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Nuevo_Roezec/EstadosEmpresa/Create",
            Update = "Nuevo_Roezec/EstadosEmpresa/Update",
            Delete = "Nuevo_Roezec/EstadosEmpresa/Delete",
            Retrieve = "Nuevo_Roezec/EstadosEmpresa/Retrieve",
            List = "Nuevo_Roezec/EstadosEmpresa/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EstadosEmpresaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


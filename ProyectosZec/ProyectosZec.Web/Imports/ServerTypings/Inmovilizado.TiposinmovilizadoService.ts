namespace ProyectosZec.Inmovilizado {
    export namespace TiposinmovilizadoService {
        export const baseUrl = 'Inmovilizado/Tiposinmovilizado';

        export declare function Create(request: Serenity.SaveRequest<TiposinmovilizadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TiposinmovilizadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposinmovilizadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposinmovilizadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inmovilizado/Tiposinmovilizado/Create",
            Update = "Inmovilizado/Tiposinmovilizado/Update",
            Delete = "Inmovilizado/Tiposinmovilizado/Delete",
            Retrieve = "Inmovilizado/Tiposinmovilizado/Retrieve",
            List = "Inmovilizado/Tiposinmovilizado/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TiposinmovilizadoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


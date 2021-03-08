namespace ProyectosZec.Kairos {
    export namespace EstadosExtrasService {
        export const baseUrl = 'Kairos/EstadosExtras';

        export declare function Create(request: Serenity.SaveRequest<EstadosExtrasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EstadosExtrasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EstadosExtrasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EstadosExtrasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Kairos/EstadosExtras/Create",
            Update = "Kairos/EstadosExtras/Update",
            Delete = "Kairos/EstadosExtras/Delete",
            Retrieve = "Kairos/EstadosExtras/Retrieve",
            List = "Kairos/EstadosExtras/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EstadosExtrasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


namespace ProyectosZec.Inmovilizado {
    export namespace InmovilizadosService {
        export const baseUrl = 'Inmovilizado/Inmovilizados';

        export declare function Create(request: Serenity.SaveRequest<InmovilizadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InmovilizadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InmovilizadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InmovilizadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inmovilizado/Inmovilizados/Create",
            Update = "Inmovilizado/Inmovilizados/Update",
            Delete = "Inmovilizado/Inmovilizados/Delete",
            Retrieve = "Inmovilizado/Inmovilizados/Retrieve",
            List = "Inmovilizado/Inmovilizados/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InmovilizadosService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


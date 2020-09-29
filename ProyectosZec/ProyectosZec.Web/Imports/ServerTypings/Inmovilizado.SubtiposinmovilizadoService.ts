namespace ProyectosZec.Inmovilizado {
    export namespace SubtiposinmovilizadoService {
        export const baseUrl = 'Inmovilizado/Subtiposinmovilizado';

        export declare function Create(request: Serenity.SaveRequest<SubtiposinmovilizadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SubtiposinmovilizadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SubtiposinmovilizadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SubtiposinmovilizadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inmovilizado/Subtiposinmovilizado/Create",
            Update = "Inmovilizado/Subtiposinmovilizado/Update",
            Delete = "Inmovilizado/Subtiposinmovilizado/Delete",
            Retrieve = "Inmovilizado/Subtiposinmovilizado/Retrieve",
            List = "Inmovilizado/Subtiposinmovilizado/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SubtiposinmovilizadoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


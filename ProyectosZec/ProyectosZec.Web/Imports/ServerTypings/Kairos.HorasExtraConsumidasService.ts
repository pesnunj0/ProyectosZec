namespace ProyectosZec.Kairos {
    export namespace HorasExtraConsumidasService {
        export const baseUrl = 'Kairos/HorasExtraConsumidas';

        export declare function Create(request: Serenity.SaveRequest<HorasExtraConsumidasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<HorasExtraConsumidasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HorasExtraConsumidasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HorasExtraConsumidasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Kairos/HorasExtraConsumidas/Create",
            Update = "Kairos/HorasExtraConsumidas/Update",
            Delete = "Kairos/HorasExtraConsumidas/Delete",
            Retrieve = "Kairos/HorasExtraConsumidas/Retrieve",
            List = "Kairos/HorasExtraConsumidas/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>HorasExtraConsumidasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


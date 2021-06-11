namespace ProyectosZec.Kairos {
    export namespace AusenciasProgramadasService {
        export const baseUrl = 'Kairos/AusenciasProgramadas';

        export declare function Create(request: Serenity.SaveRequest<AusenciasProgramadasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AusenciasProgramadasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AusenciasProgramadasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AusenciasProgramadasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Kairos/AusenciasProgramadas/Create",
            Update = "Kairos/AusenciasProgramadas/Update",
            Delete = "Kairos/AusenciasProgramadas/Delete",
            Retrieve = "Kairos/AusenciasProgramadas/Retrieve",
            List = "Kairos/AusenciasProgramadas/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AusenciasProgramadasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


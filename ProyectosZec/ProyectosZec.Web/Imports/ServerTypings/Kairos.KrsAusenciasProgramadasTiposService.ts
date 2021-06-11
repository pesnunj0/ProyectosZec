namespace ProyectosZec.Kairos {
    export namespace KrsAusenciasProgramadasTiposService {
        export const baseUrl = 'Kairos/KrsAusenciasProgramadasTipos';

        export declare function Create(request: Serenity.SaveRequest<KrsAusenciasProgramadasTiposRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<KrsAusenciasProgramadasTiposRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KrsAusenciasProgramadasTiposRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KrsAusenciasProgramadasTiposRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Kairos/KrsAusenciasProgramadasTipos/Create",
            Update = "Kairos/KrsAusenciasProgramadasTipos/Update",
            Delete = "Kairos/KrsAusenciasProgramadasTipos/Delete",
            Retrieve = "Kairos/KrsAusenciasProgramadasTipos/Retrieve",
            List = "Kairos/KrsAusenciasProgramadasTipos/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>KrsAusenciasProgramadasTiposService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


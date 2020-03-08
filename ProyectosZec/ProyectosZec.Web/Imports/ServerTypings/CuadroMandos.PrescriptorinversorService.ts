namespace ProyectosZec.CuadroMandos {
    export namespace PrescriptorinversorService {
        export const baseUrl = 'CuadroMandos/Prescriptorinversor';

        export declare function Create(request: Serenity.SaveRequest<PrescriptorinversorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PrescriptorinversorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PrescriptorinversorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PrescriptorinversorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "CuadroMandos/Prescriptorinversor/Create",
            Update = "CuadroMandos/Prescriptorinversor/Update",
            Delete = "CuadroMandos/Prescriptorinversor/Delete",
            Retrieve = "CuadroMandos/Prescriptorinversor/Retrieve",
            List = "CuadroMandos/Prescriptorinversor/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PrescriptorinversorService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


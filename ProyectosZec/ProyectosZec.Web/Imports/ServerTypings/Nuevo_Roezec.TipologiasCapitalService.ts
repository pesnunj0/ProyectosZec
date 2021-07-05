namespace ProyectosZec.Nuevo_Roezec {
    export namespace TipologiasCapitalService {
        export const baseUrl = 'Nuevo_Roezec/TipologiasCapital';

        export declare function Create(request: Serenity.SaveRequest<TipologiasCapitalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TipologiasCapitalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipologiasCapitalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipologiasCapitalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Nuevo_Roezec/TipologiasCapital/Create",
            Update = "Nuevo_Roezec/TipologiasCapital/Update",
            Delete = "Nuevo_Roezec/TipologiasCapital/Delete",
            Retrieve = "Nuevo_Roezec/TipologiasCapital/Retrieve",
            List = "Nuevo_Roezec/TipologiasCapital/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TipologiasCapitalService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


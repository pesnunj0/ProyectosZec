namespace ProyectosZec.Nuevo_Roezec {
    export namespace FormasJuridicasService {
        export const baseUrl = 'Nuevo_Roezec/FormasJuridicas';

        export declare function Create(request: Serenity.SaveRequest<FormasJuridicasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<FormasJuridicasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FormasJuridicasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FormasJuridicasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Nuevo_Roezec/FormasJuridicas/Create",
            Update = "Nuevo_Roezec/FormasJuridicas/Update",
            Delete = "Nuevo_Roezec/FormasJuridicas/Delete",
            Retrieve = "Nuevo_Roezec/FormasJuridicas/Retrieve",
            List = "Nuevo_Roezec/FormasJuridicas/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>FormasJuridicasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}


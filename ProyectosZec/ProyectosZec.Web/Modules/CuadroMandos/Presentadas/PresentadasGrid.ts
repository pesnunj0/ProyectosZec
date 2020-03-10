
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    export class PresentadasGrid extends Serenity.EntityGrid<ProyectosRow, any> {
        protected getColumnsKey() { return 'CuadroMandos.Presentadas'; }
        protected getDialogType() { return PresentadasDialog; }
        protected getIdProperty() { return ProyectosRow.idProperty; }
        protected getInsertPermission() { return ProyectosRow.insertPermission; }
        protected getLocalTextPrefix() { return ProyectosRow.localTextPrefix; }
        protected getService() { return PresentadasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected onViewSubmit() {
            // only continue if base class returns true (didn't cancel request)
            if (!super.onViewSubmit()) {
                return false;
            }

            // view object is the data source for grid (SlickRemoteView)
            // this is an EntityGrid so its Params object is a ListRequest
            var request = this.view.params as Serenity.ListRequest;

            // list request has a Criteria parameter
            // we AND criteria here to existing one because 
            // otherwise we might clear filter set by 
            // an edit filter dialog if any.

            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [['FechaPresentacion'], '>', '1900-01-01']);
               

            // TypeScript doesn't support operator overloading
            // so we had to use array syntax above to build criteria.

            // Make sure you write
            // [['Field'], '>', 10] (which means field A is greater than 10)
            // not 
            // ['A', '>', 10] (which means string 'A' is greater than 10

            return true;
        }
    }
}
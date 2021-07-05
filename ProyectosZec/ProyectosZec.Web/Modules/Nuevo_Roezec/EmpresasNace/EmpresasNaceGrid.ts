
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class EmpresasNaceGrid extends Serenity.EntityGrid<EmpresasNaceRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.EmpresasNace'; }
        protected getDialogType() { return EmpresasNaceDialog; }
        protected getIdProperty() { return EmpresasNaceRow.idProperty; }
        protected getInsertPermission() { return EmpresasNaceRow.insertPermission; }
        protected getLocalTextPrefix() { return EmpresasNaceRow.localTextPrefix; }
        protected getService() { return EmpresasNaceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
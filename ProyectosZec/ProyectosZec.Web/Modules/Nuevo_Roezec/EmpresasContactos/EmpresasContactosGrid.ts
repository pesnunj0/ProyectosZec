
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class EmpresasContactosGrid extends Serenity.EntityGrid<EmpresasContactosRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.EmpresasContactos'; }
        protected getDialogType() { return EmpresasContactosDialog; }
        protected getIdProperty() { return EmpresasContactosRow.idProperty; }
        protected getInsertPermission() { return EmpresasContactosRow.insertPermission; }
        protected getLocalTextPrefix() { return EmpresasContactosRow.localTextPrefix; }
        protected getService() { return EmpresasContactosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
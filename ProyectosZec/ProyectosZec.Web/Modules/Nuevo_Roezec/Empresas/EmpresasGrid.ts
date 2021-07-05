
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class EmpresasGrid extends Serenity.EntityGrid<EmpresasRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Empresas'; }
        protected getDialogType() { return EmpresasDialog; }
        protected getIdProperty() { return EmpresasRow.idProperty; }
        protected getInsertPermission() { return EmpresasRow.insertPermission; }
        protected getLocalTextPrefix() { return EmpresasRow.localTextPrefix; }
        protected getService() { return EmpresasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
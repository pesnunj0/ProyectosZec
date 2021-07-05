
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class HistorialEmpresasGrid extends Serenity.EntityGrid<HistorialEmpresasRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.HistorialEmpresas'; }
        protected getDialogType() { return HistorialEmpresasDialog; }
        protected getIdProperty() { return HistorialEmpresasRow.idProperty; }
        protected getInsertPermission() { return HistorialEmpresasRow.insertPermission; }
        protected getLocalTextPrefix() { return HistorialEmpresasRow.localTextPrefix; }
        protected getService() { return HistorialEmpresasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
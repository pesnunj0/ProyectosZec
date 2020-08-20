
namespace ProyectosZec.Inmovilizado {

    @Serenity.Decorators.registerClass()
    export class ProveedoresGrid extends Serenity.EntityGrid<ProveedoresRow, any> {
        protected getColumnsKey() { return 'Inmovilizado.Proveedores'; }
        protected getDialogType() { return ProveedoresDialog; }
        protected getIdProperty() { return ProveedoresRow.idProperty; }
        protected getInsertPermission() { return ProveedoresRow.insertPermission; }
        protected getLocalTextPrefix() { return ProveedoresRow.localTextPrefix; }
        protected getService() { return ProveedoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
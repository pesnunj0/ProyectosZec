
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class TiposContactoGrid extends Serenity.EntityGrid<TiposContactoRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.TiposContacto'; }
        protected getDialogType() { return TiposContactoDialog; }
        protected getIdProperty() { return TiposContactoRow.idProperty; }
        protected getInsertPermission() { return TiposContactoRow.insertPermission; }
        protected getLocalTextPrefix() { return TiposContactoRow.localTextPrefix; }
        protected getService() { return TiposContactoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
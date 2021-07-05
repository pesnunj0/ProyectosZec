
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class IslasGrid extends Serenity.EntityGrid<IslasRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Islas'; }
        protected getDialogType() { return IslasDialog; }
        protected getIdProperty() { return IslasRow.idProperty; }
        protected getInsertPermission() { return IslasRow.insertPermission; }
        protected getLocalTextPrefix() { return IslasRow.localTextPrefix; }
        protected getService() { return IslasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
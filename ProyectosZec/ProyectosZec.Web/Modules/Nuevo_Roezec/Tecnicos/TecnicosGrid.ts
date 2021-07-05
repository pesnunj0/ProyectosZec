
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class TecnicosGrid extends Serenity.EntityGrid<TecnicosRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Tecnicos'; }
        protected getDialogType() { return TecnicosDialog; }
        protected getIdProperty() { return TecnicosRow.idProperty; }
        protected getInsertPermission() { return TecnicosRow.insertPermission; }
        protected getLocalTextPrefix() { return TecnicosRow.localTextPrefix; }
        protected getService() { return TecnicosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
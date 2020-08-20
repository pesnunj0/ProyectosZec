
namespace ProyectosZec.Inmovilizado {

    @Serenity.Decorators.registerClass()
    export class InmovilizadosGrid extends Serenity.EntityGrid<InmovilizadosRow, any> {
        protected getColumnsKey() { return 'Inmovilizado.Inmovilizados'; }
        protected getDialogType() { return InmovilizadosDialog; }
        protected getIdProperty() { return InmovilizadosRow.idProperty; }
        protected getInsertPermission() { return InmovilizadosRow.insertPermission; }
        protected getLocalTextPrefix() { return InmovilizadosRow.localTextPrefix; }
        protected getService() { return InmovilizadosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
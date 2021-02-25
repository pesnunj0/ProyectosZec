
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    export class RepresentantesGrid extends Serenity.EntityGrid<RepresentantesRow, any> {
        protected getColumnsKey() { return 'Roezec.Representantes'; }
        protected getDialogType() { return RepresentantesDialog; }
        protected getIdProperty() { return RepresentantesRow.idProperty; }
        protected getInsertPermission() { return RepresentantesRow.insertPermission; }
        protected getLocalTextPrefix() { return RepresentantesRow.localTextPrefix; }
        protected getService() { return RepresentantesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
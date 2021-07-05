
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class FormasJuridicasGrid extends Serenity.EntityGrid<FormasJuridicasRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.FormasJuridicas'; }
        protected getDialogType() { return FormasJuridicasDialog; }
        protected getIdProperty() { return FormasJuridicasRow.idProperty; }
        protected getInsertPermission() { return FormasJuridicasRow.insertPermission; }
        protected getLocalTextPrefix() { return FormasJuridicasRow.localTextPrefix; }
        protected getService() { return FormasJuridicasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
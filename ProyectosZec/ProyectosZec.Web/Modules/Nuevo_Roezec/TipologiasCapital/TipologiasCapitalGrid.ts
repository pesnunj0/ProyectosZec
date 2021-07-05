
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class TipologiasCapitalGrid extends Serenity.EntityGrid<TipologiasCapitalRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.TipologiasCapital'; }
        protected getDialogType() { return TipologiasCapitalDialog; }
        protected getIdProperty() { return TipologiasCapitalRow.idProperty; }
        protected getInsertPermission() { return TipologiasCapitalRow.insertPermission; }
        protected getLocalTextPrefix() { return TipologiasCapitalRow.localTextPrefix; }
        protected getService() { return TipologiasCapitalService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}

namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido

    @Serenity.Decorators.registerClass()
    export class SociosGrid extends Serenity.EntityGrid<SociosRow, any> {
        protected getColumnsKey() { return 'Roezec.Socios'; }
        protected getDialogType() { return SociosDialog; }
        protected getIdProperty() { return SociosRow.idProperty; }
        protected getInsertPermission() { return SociosRow.insertPermission; }
        protected getLocalTextPrefix() { return SociosRow.localTextPrefix; }
        protected getService() { return SociosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}

namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    export class PrescriptorinversorGrid extends Serenity.EntityGrid<PrescriptorinversorRow, any> {
        protected getColumnsKey() { return 'CuadroMandos.Prescriptorinversor'; }
        protected getDialogType() { return PrescriptorinversorDialog; }
        protected getIdProperty() { return PrescriptorinversorRow.idProperty; }
        protected getInsertPermission() { return PrescriptorinversorRow.insertPermission; }
        protected getLocalTextPrefix() { return PrescriptorinversorRow.localTextPrefix; }
        protected getService() { return PrescriptorinversorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
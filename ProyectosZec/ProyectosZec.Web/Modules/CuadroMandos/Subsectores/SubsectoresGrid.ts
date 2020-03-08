
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido 
    export class SubsectoresGrid extends Serenity.EntityGrid<SubsectoresRow, any> {
        protected getColumnsKey() { return 'CuadroMandos.Subsectores'; }
        protected getDialogType() { return SubsectoresDialog; }
        protected getIdProperty() { return SubsectoresRow.idProperty; }
        protected getInsertPermission() { return SubsectoresRow.insertPermission; }
        protected getLocalTextPrefix() { return SubsectoresRow.localTextPrefix; }
        protected getService() { return SubsectoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Añadidos
        // Primero campo de ordenación por defecto
        protected getDefaultSortBy() {
            return [SubsectoresRow.Fields.SubsectorId];
        }

        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'CuadroMandos/Subsectores/ListExcel',
                separator: true
            }));

            buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        // Fin añadidos
    }
}
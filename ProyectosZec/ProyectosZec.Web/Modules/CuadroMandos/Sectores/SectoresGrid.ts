
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    export class SectoresGrid extends Serenity.EntityGrid<SectoresRow, any> {
        protected getColumnsKey() { return 'CuadroMandos.Sectores'; }
        protected getDialogType() { return SectoresDialog; }
        protected getIdProperty() { return SectoresRow.idProperty; }
        protected getInsertPermission() { return SectoresRow.insertPermission; }
        protected getLocalTextPrefix() { return SectoresRow.localTextPrefix; }
        protected getService() { return SectoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Añadidos
        // Primero campo de ordenación por defecto
        protected getDefaultSortBy() {
            return [SectoresRow.Fields.SectorId];
        }

        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'CuadroMandos/Sectores/ListExcel',
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
}
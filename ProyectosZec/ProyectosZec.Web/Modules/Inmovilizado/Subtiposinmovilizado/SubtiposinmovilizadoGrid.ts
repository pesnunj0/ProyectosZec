
namespace ProyectosZec.Inmovilizado {
    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido

    export class SubtiposinmovilizadoGrid extends Serenity.EntityGrid<SubtiposinmovilizadoRow, any> {
        protected getColumnsKey() { return 'Inmovilizado.Subtiposinmovilizado'; }
        protected getDialogType() { return SubtiposinmovilizadoDialog; }
        protected getIdProperty() { return SubtiposinmovilizadoRow.idProperty; }
        protected getInsertPermission() { return SubtiposinmovilizadoRow.insertPermission; }
        protected getLocalTextPrefix() { return SubtiposinmovilizadoRow.localTextPrefix; }
        protected getService() { return SubtiposinmovilizadoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Inmovilizado/Subtiposinmovilizados/ListExcel',
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
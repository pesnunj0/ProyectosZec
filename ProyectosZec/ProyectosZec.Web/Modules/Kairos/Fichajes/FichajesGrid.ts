
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    export class FichajesGrid extends Serenity.EntityGrid<FichajesRow, any> {
        protected getColumnsKey() { return 'Kairos.Fichajes'; }
        protected getDialogType() { return FichajesDialog; }
        protected getIdProperty() { return FichajesRow.idProperty; }
        protected getInsertPermission() { return FichajesRow.insertPermission; }
        protected getLocalTextPrefix() { return FichajesRow.localTextPrefix; }
        protected getService() { return FichajesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Kairos/Fichajes/ListExcel',
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